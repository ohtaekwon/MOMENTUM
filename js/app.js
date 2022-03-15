const loginFormEl=document.querySelector('#login-Form')
const loginInput = loginFormEl.querySelector('input')
const greeting = document.querySelector('#greeting')
const HIDDEN_CLASSNAME = 'hidden'



function onLoginSubmit(info){
  // 새로 고침을 막음
  info.preventDefault()
  loginFormEl.classList.add(HIDDEN_CLASSNAME)
  const username = loginInput.value

  // localStorage
  localStorage.setItem('username',username)
  greeting.innerText = `Hello ${username}`
  greeting.classList.remove(HIDDEN_CLASSNAME)
}

loginFormEl.addEventListener('submit',onLoginSubmit)


// function handleLinkClick(info){
//   info.preventDefault()
//   console.dir(info)
//   alert('click')

// }
// const link = document.querySelector('a')
// link.addEventListener('click',handleLinkClick)
