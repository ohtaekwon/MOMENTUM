// 2-1. onGeoOk - 실행 될 함수
function onGeoOk(position){
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log(`You live in ${lat}, ${lng} `)
}
// 2-2. onGeoError - 실행이 안 될 함수
function onGeoError(){
  alert("Can't find you. No Weather for you.")
}
// 1. getCurrentPosition(실행 될 함수, 에러가 발생했을 떄 함수)
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)
