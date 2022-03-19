// 1. 엘리멘터 생성
const toDoForm = document.getElementById("todo-form") // toDoForm 엘리멘터 지정
const toDoInput = toDoForm.querySelector("#todo-form input") // toDoForm안에 input타입 지정
const toDoList = document.getElementById("todo-list") // toDoList 엘리멘터 지정

// 7-1. "todos"를 중복해서 사용하므로 TODOS_KEY라는 새로운 변수로 만들어서 사용
const TODOS_KEY = "todos"

// 5. toDo를 저장할 array 생성
// const toDos =[] // aplication이 시작될 때 toDos array를 빈 값으로 시작하는 대신에
let toDos = []; // 8. 매번 새로운 toDo만 입력하기 때문에 let으로 변경하여 업데이트가 가능하도록 한다.

// 6. saveToDos - toDos array의 내용을 localStorage에 넣는다.
function saveToDos(){
  // localStorage.setItem("todos",toDos)
  // JSON.stringify(toDos) // JS에 입력하는 어떤 것이든 string형태로 형변환
  localStorage.setItem(TODOS_KEY,JSON.stringify(toDos)) // locaslStorage에 입력한 것들을 string으로 형변환
}


// 4. deleteToDo - ToDo 삭제 함수
function deleteToDo(event){
  // console.dir(event.target) // 4-1. button property에서 parentNode : li 를 찾는다.
  // console.dir(event.target.parentElement) // li가 출력이 되고 어떤게 클릭됐는지 확인할 수 있다.
  // console.dir(event.target.parentElement.innerText) // 안의 innerText값이 출력된다. 
  // 이제 누가 클릭됐는지 확인할 수 있다.

  const liEl = event.target.parentElement // 4-2. liEl에 클릭시 지정된 엘리멘터를 찾음
  liEl.remove() // 해당 엘리멘터를 삭제한다.

  toDos = toDos.filter((toDo) => toDo.id !== parseInt(liEl.id)) // 10. toDo는 toDos DB에 있는 요소중 하나이다.  // toDo의 id 값과 삭제하려는 liEl의 id값이 같지 않으면 true로 반환
  saveToDos() // 10-2. 새롭게 바뀐 toDos array를 다시 localStorage에 저장
}

// 3. paintToDo - ToDoList를 만든다.(toDo를 HTML에 그리는 역할)
function paintToDo(newTodo){ 
  const liEl = document.createElement("li"); // li 엘리멘트 생성

  liEl.id=newTodo.id // 9-2. li 엘리먼트의 id 값을 newTodo id값으로 할당한다.
  
  const spanEl = document.createElement("span"); // span 엘리멘트 생성
  spanEl.innerText=newTodo.text;   // span 태그 안에 입력받은 문자 추가
  const buttonEl = document.createElement("button") // 버튼타입 생성
  buttonEl.innerText="❌"; // 버튼안에 이모지 ❌ 를 추가
  buttonEl.addEventListener('click',deleteToDo) // 버튼을 클릭할때마다 deletToDo 함수 실행
  liEl.appendChild(spanEl)  // li안에 span태그 삽입
  liEl.appendChild(buttonEl) // li안에 버튼타입 삽입
  toDoList.appendChild(liEl)  // toDoList 엘리멘터안에 li태그 삽입
}

// 2. ToDo에 입력할 함수
function handleToDoSubmit(event){ // 발생한 event를 인자로 갖는다.
  event.preventDefault();  // 새로고침 방지
  const newTodo=toDoInput.value; // toDoInput으로 입력한 value를 newTodo 변수에 할당한다.
  toDoInput.value=""; // toDoInput에 입력한 문자를 비워준다.

  // 9. newTodoObj - obj형태로 localstorage에 저장하기 위해 새로운 변수 할당
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };

  // 5-1.
  // toDos.push(newTodo) // 5-1. 입력받은 value 값을 toDos array에 추가한다.
  toDos.push(newTodoObj)  // 9-1. obj형태를 toDos array에 push한다.
  paintToDo(newTodoObj); // 3-1. input에 입력하고 submit할 때, paintToDo 함수를 실행한다. 
  saveToDos(); // 6-1. saveToDos함수를 사용하면서 입력받은 todo를 toDos에 저장

}
// 2-1. submit 이벤트
toDoForm.addEventListener('submit',handleToDoSubmit) // todoForm의 submit이벤트

// 7. localStorage에서 가져온 값들을 sacedToDos에 할당
const savedToDos = localStorage.getItem(TODOS_KEY)

// 7-2. 
if (savedToDos!==null){
  const parsedToDos = JSON.parse(savedToDos) // localStorage안의 string형태를 array형태로 형변환
  toDos = parsedToDos; // 8-1. localStoarge에 toDo들이 있으면 toDos에 parsedToDos를 넣어서 전에 있던 toDo들을 복원한다.
  parsedToDos.forEach(paintToDo) // 7-3. parsedToDos가 가지고 있는 array의 각각의 item들이 painToDo 함수를 실행
} 

