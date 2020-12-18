// DOM MANIPULATION:
// 1. Create an element
// 2. Add content
// 3. Append to an existing element

// DOM Variables (these will be added dynamically)
// The #city-forecast section
var todaysForecast = $("#city-forecast");
// The #five-day-forecast section
// Cards will appear dynamically
// Content inside of the cards will appear dynamically
var fiveDayForecast = $("#five-day-forecast");

// What I will need from OpenWeather:
// - The forecast for the current day depending on which city is selected
// - The forecast for the next five days depending on which city was selected
// - Access to the cities through the search function on the app

$(document).ready(function () {
  var APIkey = "2d55950b982d8809e238650a5988955c";
  var location = "atlanta";
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
    var temperature = response.main.temp + "°F";
    // Humidity variable
    var humidity = response.main.humidity + "%";
    // Wind speed variable
    var windSpeed = response.wind.speed + " MPH";
    // Get the date
    var currentDate = moment().format("(MM/DD/YYYY)");
    console.log(currentDate);
    // Get icon that represents the current weather
    var weatherIconCode = response.weather[0].icon;
    var weatherIconURL = "http://openweathermap.org/img/wn/" + weatherIconCode + "@2x.png"
    var weatherIconImage = $("<img>");
    weatherIconImage.attr("src", weatherIconURL);
    weatherIconImage.attr("alt", "Weather icon");
    weatherIconImage.attr("style","height: 60px");
    // Crate an h1 with the city name, date, and icon need to be created and appended to #city-forecast
    var cityForecast = $("#city-forecast");
    var h1Element = $("<h1>");
    h1Element.text(cityName);
    h1Element.append(" ",currentDate, weatherIconImage)
    cityForecast.append(h1Element);

    // Get the UV index
    $.ajax({
      url:
        "http://api.openweathermap.org/data/2.5/uvi?lat=33.75&lon=-84.39&units=imperial&appid=" + APIkey,
      method: "GET",
    }).then(function (response) {
      var UVindex = response.value;
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
