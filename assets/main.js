// Manage time elements
var theDate = moment().format('LL');
document.getElementById("momentDate").innerHTML = theDate;

// *API KEY: 4d8fb5b93d4af21d66a2948710284366

let icon = document.querySelector(iconMain)
const api = {
  base: "https://api.openweathermap.org/data/2.5/",
  key: "4d8fb5b93d4af21d66a2948710284366"
};

const search = document.querySelector(".search");
search.addEventListener("keypress", setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    evt.preventDefault();
    getResults(search.value);
    console.log(search.value);

  }
};

function getUVI(query) {
  fetch(`${api.base}uvi?lat=${lat}&lon=${lon}&appid=${api.key}`)
    .then(weather => {
      return weather.json();
    }).then(displayResults);
    console.log();
};

function getResults(query) {
  fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
    .then(weather => {
      return weather.json();
    }).then(displayResults);
  function getUVI(query) {
    fetch(`${api.base}uvi?lat=${lat}&lon=${lon}&appid=${api.key}`)
      .then(weather => {
        return weather.json();
      }).then(displayResults);
  };
};

function displayResults(weather) {
  console.log(weather);
  let lat = `${weather.coord.lat}`
  let lon = `${weather.coord.lon}`
  console.log("LAT:", lat);
  console.log("LONG:", lon);
  cityMain.innerHTML = `${weather.name}`;
  iconMain.innerHTML = `${weather.weather[1].main.icon}`;
  tempMain.innerHTML = `Temp: ${Math.round(weather.main.temp)}<span> °F</span>`;
  windMain.innerHTML = `Wind: ${weather.wind.speed}mph`;
  humidMain.innerHTML = `Humidity: ${weather.main.humidity}%`;
  };


// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key} <--------fetch

//UVINDEX https://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}&appid={API}

// https://github.com/aBraveNewURL/Forecast6rabber















