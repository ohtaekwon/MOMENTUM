// 1. clcokEl 에 변수 할당
const clockEl = document.querySelector('h2#clock')

// 2. getClock 함수 생성 - 시계를 관리하는 함수
function getClock(){
  // Date Object : 현재 날짜랑 시간을 알려준다. 
  const date = new Date()
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes =  String(date.getMinutes()).padStart(2,"0")
  const seconds =  String(date.getSeconds()).padStart(2,"0")
  clockEl.innerText = (`${hours} : ${minutes} : ${seconds}`)
}

getClock()

// 3. 매초 단위로 반복하여 getClock을 실행
setInterval(getClock,1000)

 
