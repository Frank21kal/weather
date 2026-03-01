# Weather App

A simple weather application built using HTML, CSS, and JavaScript.  
It fetches real-time weather data from the OpenWeatherMap API and displays it dynamically on the page.


##  Description

This application allows users to:

- Enter a city name
- Click the **Search** button
- View the current temperature (°C)
- See the weather description
- View the official weather icon

The app includes input validation and error handling for better user experience.


## Technologies Used

- HTML5  
- CSS3  
- JavaScript (ES6)  
- Fetch API  
- Async / Await  
- OpenWeatherMap API  


##  Project Structure

weather-app/
│
├── index.html
├── weather.css
└── weather.js


## How It Works

1. The user enters a city name in the input field.
2. The `getWeather()` function runs when the **Search** button is clicked.
3. The app sends a request to the OpenWeatherMap API.
4. The response is converted into JSON format.
5. The weather data is extracted and displayed inside the `#weatherResult` div.
6. If:
   - The input is empty → An alert asks the user to enter a city name.
   - The city is not found → "City not found." is displayed.
   - A network error occurs → "Something went wrong." is displayed.



## 📂 Project Structure
