

[]()

# ☕ MOMNETOM

스타벅스 랜딩 페이지(홈페이지)를 만드는 예제입니다. <br>
꼭 ⬇ 아래 내용 모두 읽어보시고, ⬆ 완성된 코드도 확인해 보세요!

[master 브랜치로 이동]() <br/>
[signin 브랜치로 이동]())

<br/>

![Starbucks]()


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
- h1의 classList에 clicked class가 이미 있는지 확인해서, 만약 있다면, 제거하고, 없다면 추가한다. 

https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadingElement

```js
h1El.addEventListener('click',handleH1Click)


function handleH1Click(){
  // const clickedClass='clicked'
  h1El.classList.toggle('clicked');
}

```

## window event

https://developer.mozilla.org/ko/docs/Web/API/Window


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

