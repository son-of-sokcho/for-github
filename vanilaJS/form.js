const form = document.querySelector(".js-form"),
      input = document.querySelector("input"),
      greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser"
      SHOWING_CN = "showing"

function paintName(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello,${text}`;
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintName(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    }
    else{
        paintName(currentUser);
    }
}

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function init(){
    loadName();
}
init();