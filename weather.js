// Weather App JavaScript
//This function runs when user clicks the search button.
async function getWeather() {

  // Get the city name from the input field and set up the API URL with the city and API key.
  const city = document.getElementById("cityInput").value;
  const apiKey = "667a75e0bae4697d7e95b45157386fb8";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


  if (!city.trim()) { // .trim() removes whitespace from the string
    alert("Please enter a city name.");
    return;
  }
  // Show a loading message while fetching data.
  document.getElementById("weatherResult").innerHTML = "Loading...";

  try {
    // send request to the API server and wait for the response, then convert the response to JSON format.
    const response = await fetch(url);
    const data = await response.json();
    const icon = data.weather[0].icon;

    if (data.cod === "404") {
      document.getElementById("weatherResult").innerHTML = "City not found.";
      return;
    }
    // display results on the page.
    document.getElementById("weatherResult").innerHTML = `
      <h2>${data.name}</h2>
      <img src="https://openweathermap.org/img/wn/${icon}@2x.png">
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Weather: ${data.weather[0].description}</p>
    `;
  } catch (error) {
    // If there's an error (like network issues), show an error message.
    document.getElementById("weatherResult").innerHTML = "Something went wrong.";
  }
}