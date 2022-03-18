



#  MOMENTOM

MOMENTOM 랜딩 페이지(홈페이지)를 만드는 예제입니다.<br>
꼭 ⬇ 아래 내용 모두 읽어보시고, ⬆ 완성된 코드도 확인해 보세요!


<br/>

![MOMVENTOM](https://github.com/ohtaekwon/MOMENTUM/blob/master/_asset/bg1.png?raw=true)


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

## toggle

##### [toggle 더 알아보기](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle)

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

## window event
##### [event 더 알아보기](https://developer.mozilla.org/ko/docs/Web/API/Window)


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

## Window.localStorage
##### [local Storage 더 알아보기](https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage)

- localStorage에는 array는 저장할 수 없다.
- 오직, text형태만 저장할 수 있다.
- array를 저장하기 위해서는 형변환 시킨다.

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


## Interval - setInterval

- '매번' 일어나야 하는 무언가를 위해 사용
- 예를 들어 '매 2초' 는 무언가 할 때 2초마다 일어나게 하는 것을 의미한다.

### setInterval

##### [setInterval 더 알아보기](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)

- `setInterval(실행하고자 하는 함수, ms)`

```js
// setInterval(실행하고자 하는 fuction,호출되는 function의 간격 (ms) )
// sayHello 함수를 5초마다 실행
setInterval(sayHello,5000)

```

## Timeout - setTimeout

### setTimeout

##### [setTimeout 더 알아보기](https://developer.mozilla.org/ko/docs/Web/API/setTimeout)

- `setTimeout(실행하고자 하는 함수, ms)

```js
const clockEl = document.querySelector('h2#clock')

function sayHello(){
  // Interval
  // 2초마다 실행 - 내장 메서드 활용
  console.log('hello')
}

// setTimeout(실행하고자 하는 fuction,호출되는 function의 간격 (ms)후 실행종료)
// sayHello 함수를 5초 뒤에 실행 후 종료
setTimeout(sayHello, 5000)
```

## Date Object

##### [Date 더 알아보기](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date)

#### `Date()`
- 함수로 호출할 경우 `new Date().toString()` 과 동일하게 현재 시간을 나타내는 문자열을 반환한다.

#### `new Date()`
- 생성자로 호출할 겨웅 새로운 `Date` 객체를 반환한다.

```js
const date = new Date()
```

### Date의 인스턴스 메서드

- `Date.prototype.getDate()`
- `Date.prototype.getDay()`
- `Date.prototype.getFullYear()`
- `Date.prototype.getHours()` 
등


## 시계를 만드는 함수

### padStart()

##### [padStart() 더 알아보기](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)

- `padStart(string의 길이, "추가할 문자")`

```js
console.log("1".padStart(2,"0")) // 01
console.log("12".padStart(2,"0")) // 12

```

### padEnd()

##### [padEnd() 더 알아보기](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd)

```js
console.log("1".padEnd(2,"0")) // 10
console.log("12".padEnd(2,"0")) // 12
```

### 시계 함수
```js
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

```

## Math.module()

##### [Math 더 알아아보기](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math)

### random()
```js
// 랜덤으로 1~10까지의 숫자 구하기
Math.floor(Math.random()*10)
```
### round()

- `Math.round()` 함수는 입력값을 반올림한 수와 가장 가까운 정수 값을 반환한다.


```js
Math.round(0.9) // 1
```
### ceil()

- `Math.ceil()` 함수는 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 int로 반환한다.

```js
Math.ceil(.95);    // 1
Math.ceil(4);      // 4
Math.ceil(7.004);  // 8
Math.ceil(-0.95);  // -0
Math.ceil(-4);     // -4
Math.ceil(-7.004); // -7
```

## quote

```js
const quotes = [
  {
    quote : "인생은 과감한 모험, 아니면 아무것도 아니다.",
    author : "헬렌 켈러",
  },
  {
    quote : "때로는 살아있는 것 조차도 용기가 될 때가 있다.",
    author : "세네카",
  },
  {
    quote : "젊음은 한때이지만, 철없음은 영원할 수 있다.",
    author : "데이브 배리",
  },
  {
    quote : "두려움은 희망 없이 있을 수 없고, 희망은 두려움없이 있을 수 없다.",
    author : "바뤼흐 스피노자",
  },
  {
    quote : "인간사에는 안정된 것이 하나도 없음을 기억해라. 그러므로 성공에 들뜨거나 역경에 지나치게 의기소침하지 마라. ",
    author : "소크라테스",
  },
  {
    quote : "우리가 무슨 생각을 하느냐가 우리가 어떤 사람이 되는지를 결정한다.",
    author : "오프라 윈프리",
  },
  {
    quote : "세상은 고통으로 가득하지만 한편 그것을 이겨내는 일로도 가득 차 있다.",
    author : "헬렌켈러 ",
  },
  {
    quote : "어릴 적 나에겐 정말 많은 꿈이 있었고, 그 꿈의 대부분은 많은 책을 읽을 기회가 많았기에 가능했다고 생각한다. ",
    author : "빌 게이츠",
  },
  {
    quote : "'때문에' 라고 말하는 사람보다 '덕분에' 라고 말하는 사람이 성공한다.",
    author : "양광모, <비상>",
  },
  {
    quote : "거짓말이 달아준 날개로 당신은 얼마든지 멀리 갈 수 있습니다. 그렇지만 다시 돌아오는 길은 어디에도 없어요.",
    author : "파울로 코엘료 '마법의 순간' 中",
  },
]

const quoteEl = document.querySelector('#quote span:first-child') 
const authorEl = document.querySelector('#quote span:last-child')
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]

quoteEl.innerText = todaysQuote.quote;
authorEl.innerText = todaysQuote.author;

```

## 배경이미지


## todo