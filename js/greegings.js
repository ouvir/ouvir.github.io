const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const logout = document.querySelector("#greeting>button")
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username); 

}
function paintGreetings(username){
    const greetingText = greeting.querySelector("h1")
    greetingText.classList.add("greetingText");
    greetingText.innerText = `Hello ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function handleRename(){
    localStorage.removeItem(USERNAME_KEY);
    greeting.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
    }else{
        paintGreetings(savedUsername);
    }

logout.addEventListener("click",handleRename)
