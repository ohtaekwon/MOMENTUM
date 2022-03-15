const h1El = document.querySelector('.hello h1');

console.dir(h1El)

// evnet - click
function handleTitelClick(){
  const currentColor = h1El.style.color;
  let newColor;
  if (currentColor==='royalblue'){
    newColor='tomato';
  }else{
    newColor='royalblue';
  }
  h1El.style.color = newColor;
}

// event - mouseenter
function handleMouseEnter(){
  h1El.innerText = 'Mouse is here';
  console.log('mouse is here')
}

// event - mouseleave
function handleMouseLeave(){
  h1El.innerText = 'Mouse is gone'
  console.log('mouse is gone')
}

// event -  handleTitelClick
h1El.addEventListener('click', handleTitelClick)

// event - handleMouseEnter
h1El.addEventListener('mouseenter',handleMouseEnter)

// event - handleMouseLeave
h1El.addEventListener('mouseleave',handleMouseLeave)
