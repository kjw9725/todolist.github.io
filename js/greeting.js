const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = 'username';


loginForm.addEventListener("submit", onLoginSubmit);

function onLoginSubmit(event) {
  event.preventDefault();

  const username = loginInput.value;

  loginForm.classList.add(HIDDEN_CLASS);
  console.log(username);
  localStorage.setItem(USERNAME_KEY,username);
  paintGreetings(username)
}


function paintGreetings(username){
  greeting.innerText = "Hello " + username;
  greeting.classList.remove(HIDDEN_CLASS);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", onLoginSubmit);
}else{
  paintGreetings(savedUsername);
}