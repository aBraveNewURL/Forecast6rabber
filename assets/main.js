// Manage time elements and
// Lay out variables
let moment = moment();
// console.log(moment.toString());
var theDate = moment().format('LL');
document.getElementById("momentDate").innerHTML = theDate;


const url = `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid={APIKey}`;
// *API KEY: 5c0c761d0687f69cd75f2132ebbdce74
const APIKey = "4d8fb5b93d4af21d66a2948710284366";
const form = document.querySelector(".searchArea form");
const input = document.querySelector(".searchArea input");
var inputValue = input.value;
const list = document.querySelector(".cityButtons .cities");

//Prevent default behavior
function noDefault(event) {
    event.preventDefault();
    console.log(event);
  }
    
  inputValue.addEventListener("click", noDefault);

    
   