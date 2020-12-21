$(document).ready(function () {
  // Variables for local storage
  var searchedCitiesArray = JSON.parse(localStorage.getItem("cities")) || [];
  var uniqueCities = JSON.parse(localStorage.getItem("uniqueCities")) || [];
  var ulElement = $(".list-group");
  var lastElement = uniqueCities[uniqueCities.length - 1];
  

  // Function to create list groups for each city in the unique cities array
  function searchHistory() {
    for (var i = 0; i < uniqueCities.length; i++) {
      var liElement = $("<li>");
      liElement.addClass("list-group-item");
      liElement.text(uniqueCities[i]);
      ulElement.prepend(liElement);
    }
  }
  searchHistory();

  // Variable for API key for the AJAX calls
  var APIkey = "2d55950b982d8809e238650a5988955c";

  // Function to get the weather for the current day
  function ajaxCalls(location) {
    // AJAX call for the weather
    $.ajax({
      url:
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        location +
        "&units=imperial&appid=" +
        APIkey,
      method: "GET",
    }).then(function (response) {
      // Conditional to check if the response has a name property
      // If yes, push it to the array and add it to local storage
      // Set local storage key to store unique cities array
      if (response.name) {
        localStorage.setItem("uniqueCities", JSON.stringify(uniqueCities));
      }
      // City name variable
      var cityName = response.name;
      // Temperature variable
      var temperature = "Temperature: " + response.main.temp + "°F";
      // Humidity variable
      var humidity = "Humidity: " + response.main.humidity + "%";
      // Wind speed variable
      var windSpeed = "Wind Speed: " + response.wind.speed + " MPH";
      // Get the date
      var getDate = new Date(response.dt * 1000);
      var currentDate = "(" + getDate.toLocaleDateString() + ")";
      // Get icon that represents the current weather and display it on the page
      // Weather icon code
      var weatherIconCode = response.weather[0].icon;
      // Weather icon image source
      var weatherIconURL =
        "http://openweathermap.org/img/wn/" + weatherIconCode + "@2x.png";
      // Create image for weather icon and set the source to be the weatherIconURL.
      var weatherIconImage = $("<img>");
      weatherIconImage.attr("src", weatherIconURL);
      weatherIconImage.attr("alt", "Weather icon");
      weatherIconImage.attr("style", "height: 60px");
      // Variable for the city forecast display
      var todaysForecast = $("#city-forecast");
      // Create h1 element and add city name, current date, and weather icon.
      var h1Element = $("<h1>");
      h1Element.append(cityName, " ", currentDate, weatherIconImage);
      todaysForecast.append(h1Element);
      // Create p element for temperature and add text
      var pElementTemp = $("<p>");
      pElementTemp.text(temperature);
      // Create p element for humidity and add text
      pElementHumidity = $("<p>");
      pElementHumidity.text(humidity);
      // Create p element for wind speed and add text
      pElementWindSpeed = $("<p>");
      pElementWindSpeed.text(windSpeed);
      // Append p elements for temp, humidity, and wind speed to the city forecast section
      todaysForecast.append(pElementTemp, pElementHumidity, pElementWindSpeed);

      // AJAX call to get the UV index
      $.ajax({
        url:
          "https://api.openweathermap.org/data/2.5/uvi?lat=" +
          response.coord.lat +
          "&lon=" +
          response.coord.lon +
          "&units=imperial&appid=" +
          APIkey,
        method: "GET",
      }).then(function (response) {
        // Get the UV index
        var UVindex = response.value;
        var UVindexSpan = $("<span>");
        if (UVindex >= 8) {
          UVindexSpan.addClass("uv-index-severe");
        } else if (UVindex >= 3 && UVindex <= 7) {
          UVindexSpan.addClass("uv-index-moderate");
        } else {
          UVindexSpan.addClass("uv-index-favorable");
        }
        UVindexSpan.text(UVindex);
        // Create p element for UV index and add text
        var pElementUVindex = $("<p>");
        pElementUVindex.text("UV Index: ");
        pElementUVindex.append(UVindexSpan);
        // Append to the page
        todaysForecast.append(pElementUVindex);
      });

      // AJAX call to get the forecast for the next five days
      $.ajax({
        url:
          "https://api.openweathermap.org/data/2.5/onecall?lat=" +
          response.coord.lat +
          "&lon=" +
          response.coord.lon +
          "&exclude=current&units=imperial" +
          "&appid=" +
          APIkey,
        method: "GET",
      }).then(function (response) {
        // Create heading and append to the five day forecast
        var fiveDayForecast = $("#five-day-forecast");
        var h1Element = $("<h1>");
        h1Element.text("5 Day Forecast:");
        fiveDayForecast.append(h1Element);
        // For loop to create five day forecast cards
        for (var i = 1; i < 6; i++) {
          fiveDayForecast.attr("style", "display: block");
          var newDate = new Date(response.daily[i].dt * 1000);
          var stringifiedDate = newDate.toLocaleDateString();
          // Create card
          var card = $("<div>");
          card.addClass("card");
          card.attr("style", "width: 10rem");
          // Create card body and append it to the card
          var cardBody = $("<div>");
          cardBody.addClass("card-body");
          card.append(cardBody);
          // Create h5 element, add the date from the fiveDayForecastArray, and append to the card body
          var h5Element = $("<h5>");
          h5Element.addClass("card-title");
          h5Element.text(stringifiedDate);
          cardBody.append(h5Element);
          // Create p element, add the weather icon, and append to the card body
          var pElementIcon = $("<p>");
          // Weather icon code
          var iconCode = response.daily[i].weather[0].icon;
          // Weather icon image source
          var iconURL =
            "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
          // Create image for weather icon and set the source to be the weatherIconURL. Add alt text and styling.
          var iconImage = $("<img>");
          iconImage.attr("src", iconURL);
          iconImage.attr("alt", "Weather icon");
          iconImage.attr("style", "height: 60px");
          pElementIcon.append(iconImage);
          // Append p element with icon to card body
          cardBody.append(pElementIcon);
          //   Create p element, add temp, and append to the card body
          var pElementTemp = $("<p>");
          var temp = "Temp: " + response.daily[i].temp.max + "°F";
          pElementTemp.append(temp);
          cardBody.append(pElementTemp);
          fiveDayForecast.append(card);
          // Create p element, add humidity, and append to the card body
          var pElementHumidity = $("<p>");
          var humidity = "Humidity: " + response.daily[i].humidity + "%";
          pElementHumidity.append(humidity);
          cardBody.append(pElementHumidity);
        }
      });
      $(".form-control").val("");
    });
  }
  ajaxCalls(lastElement);

  // Click event for search button
  $("#search-button").on("click", function (event) {
    event.preventDefault();
    // Conditional to empty forecast each time a new city is searched
    if ($("#city-forecast") !== "" && $("#five-day-forecast") !== "") {
      $("#city-forecast").empty();
      $("#five-day-forecast").empty();
    }

    // Variables

    var location = $(".form-control").val();

    // Title case uniqueCities
    function titleCase(uniqueCities) {
      uniqueCities = uniqueCities.toLowerCase().split(" ");
      for (var i = 0; i < uniqueCities.length; i++) {
        uniqueCities[i] =
          uniqueCities[i].charAt(0).toUpperCase() + uniqueCities[i].slice(1);
      }
      return uniqueCities.join(" ");
    }

    // Push searched city into searchedCitiesArray
    searchedCitiesArray.push(titleCase(location));

    // Push unique cities from searched cities array into unique cities array
    searchedCitiesArray.forEach((city) => {
      if (!uniqueCities.includes(city)) {
        uniqueCities.push(city);
      }
    });

    ulElement.empty();
    searchHistory();
    ajaxCalls(location);
  });
  $(".list-group-item").on("click", function (event) {
    event.preventDefault();
    // Conditional to empty forecast each time a new city is searched
    if ($("#city-forecast") !== "" && $("#five-day-forecast") !== "") {
      $("#city-forecast").empty();
      $("#five-day-forecast").empty();
    }
    var listItem = event.target.innerHTML;
    var location = listItem;
    ajaxCalls(location);
  });
});
