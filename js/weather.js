function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_KEY = "e264f91fd715cbf06f5329ce94cbef63";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr&units=metric`;
    fetch(url).then(response => response.json()).then(data=>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].main} ${data.main.temp}℃`;
        city.innerText = data.name;
    });
}
function onGeoError(){
    alert("Unable to get weather information.")
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);