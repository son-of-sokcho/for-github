const title = document.querySelector("#title");
title.innerHTML = "Click here!";
title.style.color = "white";
document.title = "I own you now";

function handleClick(){
    title.style.color = "blue";
    title.innerHTML = "Now, fuck off";
}

const CLICKED_CLASS = "clicked";

function handleClick(){
title.classList.toggle(CLICKED_CLASS);
}
    title.addEventListener("click",handleClick);

   /* 이 함수는 위에 있는 "toggle"과 같은 역할한다.
   클래스에 지정한 클래스 명이 있는지 검사한 후 있으면 제거, 없으면 생성한다.
   {const hasClass = title.classList.contains(CLICKED_CLASS);
    if (hasClass){
        title.classList.remove(CLICKED_CLASS);
        title.style.color = "blue";
        title.innerHTML = "Now, fuck off";
    }
    else {
        title.classList.add(CLICKED_CLASS);
        title.style.color = "white";
        title.innerHTML = "Click here!";
    }
}*/




/*if (10 === "10"){
    console.log("hi");
}
else if (10 === 10){
    console.log("h0");
}
else {
    console.log("ahahhahaha");
}

if(10 === 10 || 4 === 4 && 3 === 3){
    console.log('true');
}*/
// || 는 or과 같고, &&는 and와 같다.