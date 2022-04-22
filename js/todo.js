const toDoForm = document.querySelector("#todo-form>form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list>ul");

const TODOS_KEY = "todos";
let toDos = [];

function handleBtnColor(event){
    event.target.classList.add("delBtnColor")
}
function handleBtnColor2(event){
    event.target.classList.remove("delBtnColor")
}


function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    console.log(li.id);
    toDos = toDos.filter((toDo)=>toDo.id !== parseInt(li.id));
    saveToDos();
}
function paintToDo(newToDoObj){
    const li = document.createElement("li");
    li.id = newToDoObj.id;
    const span = document.createElement("span");
    span.innerText = newToDoObj.text;
    const button = document.createElement("button");
    button.classList.add("delBtn");
    button.addEventListener("mouseover",handleBtnColor);
    button.addEventListener("mouseout",handleBtnColor2);
    button.addEventListener("click",deleteToDo);
    li.appendChild(button);
    li.appendChild(span);
    toDoList.appendChild(li);
}
function handleToDoSubmit(event){
    event.preventDefault();
    const newToDoObj = { 
        text: toDoInput.value,
        id: Date.now()
    }
    toDoInput.value = "";
    toDos.push(newToDoObj); 
    paintToDo(newToDoObj);   
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}