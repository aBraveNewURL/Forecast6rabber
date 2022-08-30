// Manage time elements
var theDate = moment().format('LL');
document.getElementById("momentDate").innerHTML = theDate;

// *API KEY: 4d8fb5b93d4af21d66a2948710284366

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
    console.log(search.value)
    function getUVIndex() {
      
      $.ajax({
        type: 'GET',
        dataType: 'json',
        beforeSend: function(request) {
          request.setRequestHeader('x-access-token', 'c8c1aa40c93056f8ac5648981881de2d');
        },
        url: 'https://api.openuv.io/api/v1/uv?lat=' + lat + '&lng=' + lon + '&alt=' + alt + '&ozone=' + ozone + '&dt=' + dt,
        success: function(response) {
          //handle successful response
        },
        error: function(response) {
          // handle error response
        }
      });
     };
  }
};

function getResults(query) {
  fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
    .then(weather => {
      return weather.json();
    }).then(displayResults);
};

function displayResults(weather) {
  console.log(weather);
  let lat = `${weather.coord.lat}`
  let lon = `${weather.coord.lon}`
  var iconCode = `${weather.weather[0].icon}`;
  var iconURL = "http://openweathermap.org/img/w/" + iconCode + ".png";
  console.log("LAT:", lat);
  console.log("LONG:", lon);
  var city = `${weather.name}`;
  var temp = `${Math.round(weather.main.temp)}`;
  var wind = `${weather.wind.speed}`;
  var humid = `${weather.main.humidity}`;
  document.getElementById("cityMain").value = city;
  cityMain.innerHTML = `${weather.name}`;
  tempMain.innerHTML = `Temp: ${Math.round(weather.main.temp)}<span> °F</span>`;
  windMain.innerHTML = `Wind: ${weather.wind.speed}mph`;
  humidMain.innerHTML = `Humidity: ${weather.main.humidity}%`;
  document.getElementById("iconMain").src = iconURL;
  };




  // let icon = document.querySelector(iconMain)

// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key} <--------fetch

//UVINDEX https://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}&appid={API}

// https://github.com/aBraveNewURL/Forecast6rabber















