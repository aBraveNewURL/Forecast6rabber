// Manage time elements and
// Lay out variables
// let moment = moment();
// console.log(moment.toString());
var theDate = moment().format('LL');
document.getElementById("momentDate").innerHTML = theDate;

const url = `https://api.openweathermap.org/data/2.5/weather?&units=imperial&appid=9905fc9a99b787e05e7e25f1ee7e0628`;
// *API KEY: 9905fc9a99b787e05e7e25f1ee7e0628
const APIKey = "4d8fb5b93d4af21d66a2948710284366";
const form = document.querySelector(".searchArea form");
const input = document.querySelector(".searchArea input");
var inputValue = input.value;
const list = document.querySelector(".cityButtons .cities");
var button = document.querySelector(".button")

//Prevent default behavior, grab input
function noDefault(event) {
  event.preventDefault();
  const inputVal = input.value;
  console.log(event);
}

button.addEventListener("click", noDefault);


//Fetch request for data

// fetch(url)
//   .then(response => response.json())
// console.log(response)
//   .then(data => {
//     // do stuff with the data
//   })
















