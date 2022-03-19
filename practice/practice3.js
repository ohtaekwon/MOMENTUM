const toDoFormEl = document.getElementById("todo-form")
const toDoInputEl = toDoFormEl.querySelector('#todo-form input')
const toDoListEl = document.getElementById('todo-list')

const TODOS_KEY = "todos"

let toDos=[]


function saveToDos(){
  localStorage.setItem(TODOS_KEY,JSON.stringify(toDos))
}


function deleteToDo(event){
  // console.dir(event.target.parentElement.innerText)

  const liEl = event.target.parentElement
  liEl.remove()

  toDos = toDos.filter((toDo)=>toDo.id !==parseInt(liEl.id)) 
  saveToDos()

}


function painToDo(newTodo){
  const liEl = document.createElement("li"); // li 엘리멘트 생성
  liEl.id = newTodo.id
  const spanEl = document.createElement("span");
  spanEl.innerText = newTodo.text;
  const buttonEl = document.createElement("button")
  buttonEl.innerText="x";

  buttonEl.addEventListener('click',deleteToDo)
  liEl.appendChild(spanEl)
  liEl.appendChild(buttonEl)
  toDoListEl.appendChild(liEl)
}




function handleToSubmit(event){
  event.preventDefault(); // 새로고침 방지
  const newTodo = toDoInputEl.value // input에 입력한 값
  toDoInputEl.value=""

  const newTodoObj={
    text:newTodo,
    id:Date.now(),
  };

  toDos.push(newTodoObj)
  painToDo(newTodoObj);
  saveToDos();

}

toDoFormEl.addEventListener('submit',handleToSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY)

if (savedToDos!==null){
  const parsedToDos = JSON.parse(savedToDos)
  toDos = parsedToDos
  parsedToDos.forEach(painToDo)
}painToDo