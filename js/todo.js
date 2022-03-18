const toDoForm = document.getElementById("todo-form")
const toDoInput = toDoForm.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list")

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos(){
  localStorage.setItem(TODOS_KEY,JSON.stringify(toDos))
}


// ToDo 삭제 함수
function deletToDo(event){
  const li = event.target.parentElement 
  li.remove()
}

// ToDo 입력 함수
function paintToDo(newTodo){
  const liEl = document.createElement("li")
  const spanEl = document.createElement("span")
  spanEl.innerText=newTodo
  const buttonEl = document.createElement("button")
  buttonEl.innerText="❌";
  buttonEl.addEventListener('click',deletToDo)
  
  
  liEl.appendChild(spanEl)
  liEl.appendChild(buttonEl)
  toDoList.appendChild(liEl)
}

// ToDo에 입력할 함수
function handleToDoSubmit(event){
  // 새로고침 방지
  event.preventDefault();
  const newTodo=toDoInput.value;
  toDoInput.value="";
  toDos.push(newTodo)
  paintToDo(newTodo);
  saveToDos();

}

toDoForm.addEventListener('submit',handleToDoSubmit)


const savedToDos = localStorage.getItem(TODOS_KEY)

if (saveToDos!==null){
  const parsedToDos = JSON.parse(savedToDos)
  toDos = parsedToDos
  parsedToDos.forEach(paintToDo)
} 