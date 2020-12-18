// DOM MANIPULATION:
// 1. Create an element
// 2. Add content
// 3. Append to an existing element

// DOM Variables (these will be added dynamically)
// The #city-forecast section
// The #five-day-forecast section 
    // Cards will appear dynamically 
    // Content inside of the cards will appear dynamically 

// What I will need from OpenWeather:
// - The forecast for the current day depending on which city is selected
// - The forecast for the next five days depending on which city was selected 
// - Access to the cities through the search function on the app 

// Event listeners:
// - When I click the search button, the city I entered is displayed on the page and the
// city is stored into local storage and displayed in the list-group

// Local storage:
// The last cities I searched are stored into local storage and displayed in the list-group

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