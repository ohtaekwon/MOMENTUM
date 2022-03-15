



#  MOMENTOM

MOMENTOM 랜딩 페이지(홈페이지)를 만드는 예제입니다.<br>
꼭 ⬇ 아래 내용 모두 읽어보시고, ⬆ 완성된 코드도 확인해 보세요!


<br/>

![MOMVENTOM]()


## three.js

## event

## event - classList

```js
classList evnet활용
function handleH1Click(){
  const clickedClass='clicked'
  if(h1El.classList.contains(clickedClass)){
    h1El.classList.remove(clickedClass)
  }else{
    h1El.classList.add(clickedClass)
  }
}

```

## [toggle](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle)

- h1의 classList에 특정 class가 이미 있는지 확인한다.
- 만약 있다면 classList에 해당 class가 있다면 제거하고, 
- 없다면 해당 class를 추가한다. 

https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadingElement

```js
h1El.addEventListener('click',handleH1Click)


function handleH1Click(){
  // const clickedClass='clicked'
  h1El.classList.toggle('clicked');
}

```

## [window event](https://developer.mozilla.org/ko/docs/Web/API/Window)




## login - button

```js
const loginFormEl=document.getElementById('login-Form')
const loginInput = loginFormEl.querySelector('input')
const loginButton = loginFormEl.querySelector('button')



loginButton.addEventListener('click',function(){
  const username=loginInput.value;
  if (username===""){
    alert('Please write your name')
  } else if(username.length>15){
    alert('Your name is too long.')
  } else{
    console.log(`Hello!, ${username} `)
  }
})
```

## [Window.localStorage](https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage)

### 1. Login
```js
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

// local stroage에서 username key를 찾고 그것을 savedUsername에 할당한다.
const savedUsername = localStorage.getItem(USERNAME_KEY)
// console.log(savedUsername)

// username이 없다면
if (savedUsername===null){
  // show the form
  // loginFormEl에서 'hidden'이라는 클래스명을 제거한다.
  loginFormEl.classList.remove(HIDDEN_CLASSNAME)
  // 그리고 나서, 추가한 addEventListener가 submit을 기다린다.
  // 유저명을 입력하고 login버튼을 눌러서 onLoginSubmit함수를 실행
  loginFormEl.addEventListener('submit',onLoginSubmit)
} else {
  // show the greetings
  // username이 있다면,paintGreetings 함수를 실행한다.
  paintGreetings(savedUsername)
}

```
