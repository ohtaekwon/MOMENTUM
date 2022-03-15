const loginFormEl=document.querySelector('#login-Form')
const loginInput = loginFormEl.querySelector('input')
const greeting = document.querySelector('#greeting')
const HIDDEN_CLASSNAME = 'hidden'
const USERNAME_KEY = 'username'


function onLoginSubmit(info){
  // 새로 고침을 막음
  // 1) 브라우저의 기본 동작을 막음
  info.preventDefault()
  // 2) form을 다시 숨겨준다.
  loginFormEl.classList.add(HIDDEN_CLASSNAME)
  // 3) loginInput.value를 username이라는 변수에 저장한다.
  const username = loginInput.value

  // localStorage
  // 4) username 값을 username 이라는 key와 함께 local stroage에 저장한다.
  localStorage.setItem(USERNAME_KEY,username)
  // 5) paintGeetings 함수를 호출한다.
  // paintGeetings 는 하나의 인자를 받고 있다.
  paintGreetings(username)
}

// paintGeetings
// h1 요소 안에 `Hello ${username}`이라는 텍스트를 추가하는 함수
// 그리고 classList에서 'hidden'이라는 클래스명을 제거한다.
function paintGreetings(username){
  greeting.innerText = `Hello ${username}`
  greeting.classList.remove(HIDDEN_CLASSNAME)  
}
loginFormEl.addEventListener('submit',onLoginSubmit)

// local stroage에서 username key를 찾고 그것을 savedUsername에 할당한다.
const savedUsername = localStorage.getItem(USERNAME_KEY)
console.log(savedUsername)

// username이 없다면
if (savedUsername===null){
  // show the form
  // form을 보여주고
  loginFormEl.classList.remove(HIDDEN_CLASSNAME)
  loginFormEl.addEventListener('submit',onLoginSubmit)
} else {
  // username이 있다면,
  // show the greetings
  paintGreetings(savedUsername)
}