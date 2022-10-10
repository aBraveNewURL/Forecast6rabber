// Manage time elements
var theDate = moment().format('LL');
document.getElementById("momentDate").innerHTML = theDate;


// *API KEY: 4d8fb5b93d4af21d66a2948710284366
const api = {
  base: "https://api.openweathermap.org/data/2.5/",
  key: "4d8fb5b93d4af21d66a2948710284366"
};

const search = document.querySelector(".search");
var uvBox = document.getElementById("uvBox");
search.addEventListener("keypress", setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    evt.preventDefault();
    localStorage.setItem("City", JSON.stringify(search.value));
    getResults(search.value);
    console.log(search.value);
  };
};

function getResults(query) {
  fetch(`${api.base}forecast?q=${query}&units=imperial&APPID=${api.key}`)
    .then(weather => {
      return weather.json();
    })
    .then(displayResults);
};



function displayResults(weather) {

  console.log(weather);
  var lat = `${weather.city.coord.lat}`;
  var lon = `${weather.city.coord.lon}`;
  var iconCode = `${weather.list[0].weather[0].icon}`;
  var iconURL = "http://openweathermap.org/img/w/" + iconCode + ".png";
  document.getElementById("iconMain").src = iconURL;
  var city = `${weather.city.name}`;
  var temp = `${Math.round(weather.list[0].main.temp)}`;
  var wind = `${weather.list[0].wind.speed}`;
  var humid = `${weather.list[0].main.humidity}`;

  document.getElementById("cityMain").value = city;
  cityMain.innerHTML = `${weather.city.name}`;
  tempMain.innerHTML = `Temp: ${Math.round(weather.list[0].main.temp)}<span> °F</span>`;
  windMain.innerHTML = `Wind: ${weather.list[0].wind.speed}mph`;
  humidMain.innerHTML = `Humidity: ${weather.list[0].main.humidity}%`;
  

  var date1 = moment().add(1, 'days').format('LL');
  document.getElementById("date1").innerHTML = date1;
  var iconD1 = `${weather.list[1].weather[0].icon}`;
  var iconURLD1 = "http://openweathermap.org/img/w/" + iconD1 + ".png";
  document.getElementById("icon1").src = iconURLD1;
  var temp1 = `${Math.round(weather.list[1].main.temp)}`;
  var wind1 = `${weather.list[1].wind.speed}`;
  var humid1 = `${weather.list[1].main.humidity}`;
  tempMain1.innerHTML = `Temp: ${Math.round(weather.list[1].main.temp)}<span> °F</span>`;
  windMain1.innerHTML = `Wind: ${weather.list[1].wind.speed}mph`;
  humidMain1.innerHTML = `Humidity: ${weather.list[1].main.humidity}%`;

  var date2 = moment().add(2, 'days').format('LL');
  document.getElementById("date2").innerHTML = date2;
  var iconD2 = `${weather.list[2].weather[0].icon}`;
  var iconURLD2 = "http://openweathermap.org/img/w/" + iconD2 + ".png";
  document.getElementById("icon2").src = iconURLD2;
  var temp2 = `${Math.round(weather.list[2].main.temp)}`;
  var wind2 = `${weather.list[2].wind.speed}`;
  var humid2 = `${weather.list[2].main.humidity}`;
  tempMain2.innerHTML = `Temp: ${Math.round(weather.list[2].main.temp)}<span> °F</span>`;
  windMain2.innerHTML = `Wind: ${weather.list[2].wind.speed}mph`;
  humidMain2.innerHTML = `Humidity: ${weather.list[2].main.humidity}%`;
  
  var date3 = moment().add(3, 'days').format('LL');
  document.getElementById("date3").innerHTML = date3;
  var iconD3 = `${weather.list[3].weather[0].icon}`;
  var iconURLD3 = "http://openweathermap.org/img/w/" + iconD3 + ".png";
  document.getElementById("icon3").src = iconURLD3;
  var temp3 = `${Math.round(weather.list[3].main.temp)}`;
  var wind3 = `${weather.list[3].wind.speed}`;
  var humid3 = `${weather.list[3].main.humidity}`;
  tempMain3.innerHTML = `Temp: ${Math.round(weather.list[3].main.temp)}<span> °F</span>`;
  windMain3.innerHTML = `Wind: ${weather.list[3].wind.speed}mph`;
  humidMain3.innerHTML = `Humidity: ${weather.list[3].main.humidity}%`;

  var date4 = moment().add(4, 'days').format('LL');
  document.getElementById("date4").innerHTML = date4;
  var iconD4 = `${weather.list[4].weather[0].icon}`;
  var iconURLD4 = "http://openweathermap.org/img/w/" + iconD4 + ".png";
  document.getElementById("icon4").src = iconURLD4;
  var temp4 = `${Math.round(weather.list[4].main.temp)}`;
  var wind4 = `${weather.list[4].wind.speed}`;
  var humid4 = `${weather.list[4].main.humidity}`;
  tempMain4.innerHTML = `Temp: ${Math.round(weather.list[4].main.temp)}<span> °F</span>`;
  windMain4.innerHTML = `Wind: ${weather.list[4].wind.speed}mph`;
  humidMain4.innerHTML = `Humidity: ${weather.list[4].main.humidity}%`;

  var date5 = moment().add(5, 'days').format('LL');
  document.getElementById("date5").innerHTML = date5;
  var iconD5 = `${weather.list[5].weather[0].icon}`;
  var iconURLD5 = "http://openweathermap.org/img/w/" + iconD5 + ".png";
  document.getElementById("icon5").src = iconURLD5;
  var temp5 = `${Math.round(weather.list[5].main.temp)}`;
  var wind5 = `${weather.list[5].wind.speed}`;
  var humid5 = `${weather.list[5].main.humidity}`;
  tempMain5.innerHTML = `Temp: ${Math.round(weather.list[5].main.temp)}<span> °F</span>`;
  windMain5.innerHTML = `Wind: ${weather.list[5].wind.speed}mph`;
  humidMain5.innerHTML = `Humidity: ${weather.list[5].main.humidity}%`;



  function getUVIndex() {

    $.ajax({
      type: 'GET',
      dataType: 'json',
      beforeSend: function (request) {
        request.setRequestHeader('x-access-token', 'c8c1aa40c93056f8ac5648981881de2d');
      },

      url: 'https://api.openuv.io/api/v1/uv?lat=' + lat + '&lng=' + lon + '&alt=',
      success: function (response) {
        console.log(response);
        console.log(response.result.uv);
        var uvIndex = response.result.uv;
        uvIndexMain.innerHTML = `UV Index: ${uvIndex}`;
        // var uvColor = document.getElementById("uvColor");
        // if (uvIndex >= 0 && uvIndex < 3) {
        //   console.log(document.getElementById(uvColor));
        //   document.getElementsByClassName("uvColor").style.backgroundColor = "#558B2F";
        // } else if (uvIndex >= 3 && uvIndex < 6) {
        //   document.getElementsByClassName("uvColor").style.backgroundColor = "#F9A825";
        // } else if (uvIndex >= 6 && uvIndex < 8) {
        //   document.getElementsByClassName("uvColor").style.backgroundColor = "#EF6C00";
        // } else if (uvIndex >= 8 && uvIndex < 11) {
        //   document.getElementsByClassName("uvColor").style.backgroundColor = "#B71C1C";
        // } else if (uvIndex >= 11) {
        //   document.getElementsByClassName("uvColor").style.backgroundColor = "#6A1B9A";
        // };
      },

      error: function (response) {
        console.log("error: " + response)
      }

    });
  };

  getUVIndex();
};
