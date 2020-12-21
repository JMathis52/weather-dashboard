# Weather Dashboard
<!-- Badge goes here -->
## Description
[Weather Dashboard](https://jeanarose.github.io/weather-dashboard/) is a dynamic jQuery app designed to display the forecast for the current day and the next five days of a city that the user searches. The application stores the user's recently searched cities into local storage and displays them on the left-hand side. The user can simply click on the recently searched cities to view the weather for each city. Weather Dashboard utilizes the following components:
* OpenWeather APIs (Current Weather, UVI, and One Call)
* jQuery in order to display the weather dashboard dynamically and update the search history using DOM manipulation 
* AJAX in order to call the OpenWeather APIs 
* Event listeners for the search button and for the recently searched cities 
* Local storage in order to display the recently searched cities on the page

View the deployed application here: https://jeanarose.github.io/weather-dashboard/

## Weather Dashboard

![Screenshot of Weather Dashboard webpage.](assets/images/weather-dashboard-screenshot.png)

## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Tests](#tests)

## Installation
1. Go to the [GitHub repository for Weather Dashboard](https://github.com/jeanarose/weather-dashboard).
2. Click the green **Code** button.
3. Copy the SSH key.
4. In your terminal, go into the directory that you want to host Weather Dashboard. 
5. Use the command **git clone [insert SSH key URL]** and click **Enter** (*Requires Git*).

## Usage
Weather Dashboard can be used to view the forecast for the current day and the next five days. The information provided in the forecast includes:
* Temperature
* Humidity level
* Wind speed
* UV index
* An icon that represents the weather 

## Credits
The following people contributed to the success of this application. You can view their GitHub profiles by clicking on their names:
* [Jonathan Watson](https://github.com/jonathanjwatson)
* [Pete Kriengsiri](https://github.com/pkriengsiri)
* [Peter Colella](https://github.com/petercolella)

The following sites were used to find code to make Weather Dashboard function properly:
* [Stack Overflow: ](https://stackoverflow.com/questions/19733447/bootstrap-navbar-with-left-center-or-right-aligned-items/20362024)mx: auto
* [Font Awesome: ](https://fontawesome.com/icons/search?style=solid)Search icon
* [Free Code Camp: ](https://www.freecodecamp.org/news/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27/)Title case
* [JavaScript Tutorial: ](https://www.javascripttutorial.net/array/javascript-remove-duplicates-from-array/)Get unique items in an array
* [OpenWeather: ](https://openweathermap.org/api/uvi)UVI API
* [Open Weather: ](https://openweathermap.org/current)Current Weather API
* [Open Weather: ](https://openweathermap.org/api/one-call-api)One Call API
* [Stack Overflow: ](https://stackoverflow.com/questions/20416803/how-do-i-clear-the-previous-text-field-value-after-submitting-the-form-with-out/20416864)Empty form input
* [Stack Overflow: ](https://stackoverflaow.com/questions/9050345/selecting-last-element-in-javascript-array/35913596)Get last item in an array

## License
MIT License

Copyright (c) [2020] [Jeana Rose Mathis]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Tests
Interested in testing Weather Dashboard? Check the following:
1. When an input is entered that is not a city and the search button is clicked, the dashboard clears and the input is not stored in the recently searched cities. 
2. When an input is entered that is a valid city, the dashboard shows the forecast for the current day and the next five days and the city is added to the top of the recently searched cities list. 
3. When a recently searched city is clicked, the city appears in the dashboard.
4. When the page is reloaded, the previously searched cities still appear, and the most recently searched city appears on the page. 
---

© 2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.