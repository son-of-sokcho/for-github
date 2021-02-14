const COORDS = "coords",
        BTN = document.querySelector(".js-weatherBtn"),
        CLICKED = "clicked",
        API_KEY = "9c1da5fc469700924148fcc9664485ae",
        WEATHER = document.querySelector(".js-weather");
        PLACE = document.querySelector(".js-place")
        TEMP = document.querySelector(".js-temperature")
        

function getWeather(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(response){
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const weather = json.weather[0].description;
        const place = json.name;
        TEMP.innerText = `${temperature}℃`
        WEATHER.innerText = `${weather}`
        PLACE.innerText = `${place}`
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function successCurrentPosition(position){
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function errorCurrentPosition(){
    console.log("Oops! Can't access geo location!");
}

function clickWeather(){
    BTN.addEventListener("click",askForCoords);
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(successCurrentPosition,errorCurrentPosition);
    BTN.classList.add(CLICKED);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null || loadedCoords ==='undefined'){
        clickWeather();
    }
    else{
        const parsedCoords = JSON.parse(loadedCoords);
        console.log(parsedCoords);
        getWeather(parsedCoords.latitude,parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
    clickWeather();
}
init();