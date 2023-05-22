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
      min_temp.innerHTML = response.min_temp;
      cloud_pct.innerHTML = response.cloud_pct;
      feels_like.innerHTML = response.feels_like;
      max_temp.innerHTML = response.max_temp;

      const sunriseTimestamp = new Date(response.sunrise * 1000);
      const sunriseTime = sunriseTimestamp.toLocaleTimeString([], { timeStyle: 'short' });
      sunrise.innerHTML = sunriseTime;
      
      // Convert sunset timestamp to real time
      const sunsetTimestamp = new Date(response.sunset * 1000);
      const sunsetTime = sunsetTimestamp.toLocaleTimeString([], { timeStyle: 'short' });
      sunset.innerHTML = sunsetTime;
    
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


// const getdata=(citydata) =>{
//  fetch(
//     "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + citydata,
//     options
//   )
//     .then((response) => response.json())
//     .then((response) => {
//       console.log(response);

//       wind_speed1.innerHTML = response.wind_speed;
//       wind_degrees1.innerHTML = response.wind_degrees;
//       temp1.innerHTML = response.temp;
//       humidity1.innerHTML = response.humidity;
//       sunset1.innerHTML = response.sunset;
//       min_temp1.innerHTML = response.min_temp;
//       cloud_pct1.innerHTML = response.cloud_pct;
//       feels_like1.innerHTML = response.feels_like;
//       sunrise1.innerHTML = response.sunrise;
//       max_temp1.innerHTML = response.max_temp;
    
//     })
//     .catch((err) => {
//       console.error(err);
//       alert("failed to fetch data. Please try again later.");
//     });
// };


// const cities = [
//   { name: "Shanghai", id: "shanghai" },
//   { name: "Boston", id: "boston" }
// ];

// cities.forEach((citydata) => {
//   getdata(citydata.name);
// });


const fetchWeatherData = (citydata) => {
  return fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + citydata,
    options
  )
    .then((response) => response.json())
    .catch((err) => {
      console.error(err);
      alert("Failed to fetch weather data. Please try again later.");
    });
};

const displayWeatherData = (citydata, data) => {
  const prefix = citydata.toLowerCase();

  const sunriseTimestamp = new Date(data.sunrise * 1000);
  const sunriseTime = sunriseTimestamp.toLocaleTimeString([], { timeStyle: 'short' });
  document.getElementById(`${prefix}-sunrise`).textContent = sunriseTime;

  const sunsetTimestamp = new Date(data.sunset * 1000);
  const sunsetTime = sunsetTimestamp.toLocaleTimeString([], { timeStyle: 'short' });
  document.getElementById(`${prefix}-sunset`).textContent = sunsetTime;

  document.getElementById(`${prefix}-wind-degrees`).textContent = data.wind_degrees;
  document.getElementById(`${prefix}-wind-speed`).textContent = data.wind_speed;
  document.getElementById(`${prefix}-temp`).textContent = data.temp;
  document.getElementById(`${prefix}-humidity`).textContent = data.humidity;
  document.getElementById(`${prefix}-min-temp`).textContent = data.min_temp;
  document.getElementById(`${prefix}-cloud-pct`).textContent = data.cloud_pct;
  document.getElementById(`${prefix}-feels-like`).textContent = data.feels_like;
  document.getElementById(`${prefix}-max-temp`).textContent = data.max_temp;
};

// Fetch and display weather data for each hardcoded city
const fetchAndDisplayWeatherData = async (citydata) => {
  try {
    const response = await fetchWeatherData(citydata);
    displayWeatherData(citydata, response);
  } catch (err) {
    console.error(err);
    alert("Failed to fetch weather data. Please try again later.");
  }
};

// Hardcoded city data
const cities = [
  { name: "Shanghai", id: "shanghai" },
  { name: "Boston", id: "boston" },
  { name: "England", id: "england" },
  { name: "Delhi", id: "delhi" }


];

// Fetch and display weather data for each hardcoded city
cities.forEach((citydata) => {
  fetchAndDisplayWeatherData(citydata.name);
});





