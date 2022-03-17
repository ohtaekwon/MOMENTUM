const h1El = document.querySelector('.hello h1');

console.dir(h1El)

// evnet - click
function handleTitelClick(){
  console.log('h1El was clicked')
  h1El.style.color='royalblue'
}

// event - mouseenter
function handleMouseEnter(){
  h1El.innerText = 'hmouse is here';
  console.log('mouse is here')
}

// event - mouseleave
function handleMouseLeave(){
  h1El.innerText = 'mouse is gone'
  console.log('mouse is gone')
}

// event -  handleTitelClick
h1El.addEventListener('click', handleTitelClick)

// event - handleMouseEnter
h1El.addEventListener('mouseenter',handleMouseEnter)

// event - handleMouseLeave
h1El.addEventListener('mouseleave',handleMouseLeave)

// h1El.onclick = handleTitelClick;
// h1El.onmouseenter = handleMouseEnter;


function handlewindowResize(){
  document.body.style.backgroundColor = 'tomato';
}
window.addEventListener('resize',handlewindowResize)


// function handleWindowCopy(){
//   alert('copier!')
// }
// window.addEventListener('copy',handleWindowCopy)

// function handleWindowOffline(){
//   alert('SOS no WIFI')
// }
// function handleWindowOnline(){
//   alert('ALL GOOOD')
// }
// window.addEventListener('offline',handleWindowOffline)
// window.addEventListener('online',handleWindowOnline)