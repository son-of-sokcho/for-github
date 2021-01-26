
const clockContainer = document.querySelector(".js-clock"),
      clockTitle = clockContainer.querySelector(".js-title");


function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = 
    `${hours < 10 ? `0${hours}`:hours} : ${minutes < 10 ? `0${minutes}`:minutes} : ${seconds < 10 ? `0${seconds}`:seconds}`
    // 작은 if, 문자열안에서 바로 조건문 반영
}

function init(){
    setInterval(getTime, 1000);
    getTime();
    }
    
    init();
    