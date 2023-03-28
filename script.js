const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b420a79075mshecfb9ee09b3a7a7p149e9fjsn388352154ee9",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city;

  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      temp.innerHTML = response.temp;
      humidity.innerHTML = response.humidity;
      sunset.innerHTML = response.sunset;
      min_temp.innerHTML = response.min_temp;
      cloud_pct.innerHTML = response.cloud_pct;
      feels_like.innerHTML = response.feels_like;
      sunrise.innerHTML = response.sunrise;
      max_temp.innerHTML = response.max_temp;
    
    })
    .catch((err) => {
      console.error(err);
      alert("failed to fetch data. Please try again later.");
    });
};
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Pune");

// getWeather("Pune");




