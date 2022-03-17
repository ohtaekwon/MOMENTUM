const clockEl = document.querySelector('h2#clock')

function getClock(){
  // Date Object : 현재 날짜랑 시간을 알려준다. 
  const date = new Date()
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes =  String(date.getMinutes()).padStart(2,"0")
  const seconds =  String(date.getSeconds()).padStart(2,"0")
  clockEl.innerText = (`${hours} : ${minutes} : ${seconds}`)
}

getClock()
// 매초 단위로 반복 실행
setInterval(getClock,1000)

 
