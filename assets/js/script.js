// DOM MANIPULATION:
// 1. Create an element
// 2. Add content
// 3. Append to an existing element

// DOM Variables (these will be added dynamically)
// The #city-forecast section
// var todaysForecast = $("#city-forecast");
// The #five-day-forecast section
// Cards will appear dynamically
// Content inside of the cards will appear dynamically

// What I will need from OpenWeather:
// - The forecast for the current day depending on which city is selected
// - The forecast for the next five days depending on which city was selected
// - Access to the cities through the search function on the app

$(document).ready(function () {
  function getSearchedCity(event) {
    event.preventDefault();
    // console.log($(this));
    var searchedCity = $(".form-control").val();
    console.log(searchedCity);
  }
  $("#search-button").on("click", getSearchedCity);
  var APIkey = "2d55950b982d8809e238650a5988955c";
  var location = "atlanta";
  var latitudeNum = "33.75";
  var longitudeNum = "-84.39";
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    location +
    "&units=imperial&appid=" +
    APIkey;

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    var cityName = response.name;
    // Temperature variable
    var temperature = "Temperature: " + response.main.temp + "°F";
    // Humidity variable
    var humidity = "Humidity: " + response.main.humidity + "%";
    // Wind speed variable
    var windSpeed = "Wind Speed: " + response.wind.speed + " MPH";
    // Get the date
    var currentDate = moment().format("(MM/DD/YYYY)");
    console.log(currentDate);
    // Get icon that represents the current weather and display it on the page
    // Weather icon code
    var weatherIconCode = response.weather[0].icon;
    // Weather icon image source
    var weatherIconURL =
      "http://openweathermap.org/img/wn/" + weatherIconCode + "@2x.png";
    // Create image for weather icon and set the source to be the weatherIconURL. Add alt text and styling.
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

    // Get the UV index using a different AJAX call (requires a different URL)
    $.ajax({
      url:
        "http://api.openweathermap.org/data/2.5/uvi?lat=" +
        latitudeNum +
        "&lon=" +
        longitudeNum +
        "&units=imperial&appid=" +
        APIkey,
      method: "GET",
    }).then(function (response) {
      // Get the UV index
      var UVindex = "UV Index: " + response.value;
      // Create p element for UV index and add text
      var pElementUVindex = $("<p>");
      pElementUVindex.text(UVindex);
      // Append to the apge
      todaysForecast.append(pElementUVindex);
    });
    $.ajax({
      url:
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
        location +
        "&units=imperial&appid=" +
        APIkey,
      method: "GET",
    }).then(function (response) {
      console.log(response);
      // Turn card display on
      var fiveDayForecast = $("#five-day-forecast");
      fiveDayForecast.attr("style", "display: block");
      // Add date to dayOne card using class date
      var h1Date = $("#day-one-date");
      var dayOne = moment().add(1, "days").format("MM/DD/YYYY");
      h1Date.append(dayOne);
      // Add weather icon to dayOne card using class icon
      var pElementIcon = $("#day-one-icon");
      // Weather icon code
      var iconCode = response.list[0].weather[0].icon;
      // Weather icon image source
      var iconURL = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
      // Create image for weather icon and set the source to be the weatherIconURL. Add alt text and styling.
      var iconImage = $("<img>");
      iconImage.attr("src", iconURL);
      iconImage.attr("alt", "Weather icon");
      iconImage.attr("style", "height: 60px");
      pElementIcon.append(iconImage);
      // Add temp to dayOne card using class temp
      var pElementTemp = $("#day-one-temp");
      var temp = "Temp: " + response.list[0].main.temp + "°F";
      pElementTemp.append(temp);
      // Add humidity to dayOne card using class humidity
      var p1ElementHumidity = $("#day-one-humidity");
      var humidity = "Humidity: " + response.list[0].main.humidity + "%";
      p1ElementHumidity.append(humidity);
    });
  });
});

// Event listeners:
// - When I click the search button, the city I entered is displayed on the page and the
// city is stored into local storage and displayed in the list-group

// Local storage:
// The last cities I searched are stored into local storage and displayed in the list-group
// When an item is stored to local storage:
// 1. An li with the class list-group-item is created
// 2. The text is set to the city that was searched
// 3. The li is appended to to the ul with the class of list-group

// DOM manipulation
// When a user types a city and clicks the search button:
// Create an h1
// Set the text content to have the city, current date, and icon that represents the current weather
// Append to #city-forecast
// Create a p
// Set the text content to be the current temperature
// Append to #city-forecast
// Create another p
// Set the text content to be the current humidity
// Append to #city-forecast
// Create another p
// Set the text content to be the wind speed
// Append to #city-forecast
// Create another p
// Set the text content to be the UV index
// Append to #city-forecast
