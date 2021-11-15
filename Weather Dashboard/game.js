
// var currentCity = $(current-city")
var apiKey = "f859703a85a79facc803ec19e50f064c";
var city = $("serach-input").val();
var weatherData 
var listCities

var pickCity = function (event) {
    event.preventDefault();
    var city = $("#search-input").val();
    var apiURL "https://api.openweathermap.org/data/2.5/weather?q=" + city + 
    "&appid=db1f99f6eab83a5a788a8790446e3ea2";
fetch "https://api.openweathermap.org/data/2.5/weather?q="
. then(function ( response){
    if (response.okay) {
        return response.json();
    }
})

.then (function (data) {
    weatherData = data 
    console.log (weatherData);
})
}

var listcities = function (cityIn){
    var firstC = document.createElement("button")
    firstC.classList = "list-group-item list-group-item-action";
    firstC.textContent = cityIn;
    listado.appendChild(firstC)
  
}

function getCurrentWeather(){
    var currentDay = $("<span>").text(moment().format("1))")
    $("#current-condition").append(currentDay)
}

searchBtn.addEventListener("click", getCity);

getCurrentWeather()