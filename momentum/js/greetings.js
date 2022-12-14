const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault(); // 기본동작을 막는다.
    loginForm.classList.add(HIDDEN_CLASSNAME); // hidden 클래스 추가, 로그인폼 숨김
    const username = loginInput.value;  
    localStorage.setItem(USERNAME_KEY, username); // 로컬에 이름 저장
    paintGreetings(username);
    //console.log(username);
}

function paintGreetings(username){
    greeting.innerText = `hello! ${username} keep goning`; // ${username} 변수
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername ==  null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}