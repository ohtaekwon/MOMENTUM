// 3. API_KEY 변수 할당
const API_KEY = "a683cc8e8af0ccbc8553b9ef8b12f14f"


// 2-1. onGeoOk - 실행 될 함수
function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  // 나의 좌표
  // console.log(lat)
  // console.log(lon)
  // 3-1.
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url).then(reponse =>reponse.json()).then(data=>{
    const weather = document.querySelector("#weather span:first-child")
    const city = document.querySelector("#weather span:last-child")
    

    city.innerText = data.name
    weather.innerText = `${data.weather[0].main} ${data.main.temp}`

    console.log(city, weather)
  })
}
// 2-2. onGeoError - 실행이 안 될 함수
function onGeoError(){
  alert("Can't find you. No Weather for you.")
}
// 1. getCurrentPosition(실행 될 함수, 에러가 발생했을 떄 함수)
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)

