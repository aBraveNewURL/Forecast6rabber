// Manage time elements
var theDate = moment().format('LL');
document.getElementById("momentDate").innerHTML = theDate;


// *API KEY: 4d8fb5b93d4af21d66a2948710284366

const api= {
  base: "https://api.openweathermap.org/data/2.5/",
  key: "4d8fb5b93d4af21d66a2948710284366"
}

const search = document.querySelector(".search");
search.addEventListener("keypress", setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    evt.preventDefault();
    getResults(search.value);
    console.log(search.value);
  }
}

function getResults (query) {
  fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
  .then(weather => {
    return weather.json();
  }) .then(displayResults); 
};

function displayResults (weather) {
  console.log(weather);
  cityMain.innertext = `${weather.name}, ${weather.main.temp}, ${weather.wind.speed}, ${weather.main.humidity}`; 
  let temp = document.querySelector('.current .temp');
  cityMain.innerHTML = `${weather.name}`;
  iconMain.innerHTML = `${weather[0]["description"]}`;
  tempMain.innerHTML = `Temp: ${Math.round(weather.main.temp)}<span> °F</span>`;
  windMain.innerHTML = `Wind: ${weather.wind.speed}mph`;
  humidMain.innerHTML = `Humidity: ${weather.main.humidity}%`;
  // TODO uvIndexMain.innerHTML = `UV Index: ${}`;
}


















