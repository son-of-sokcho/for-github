const body = document.querySelector("body");
const bgImage = document.querySelector(".bgImage")

const IMG_NUMBER = 6;

function getImage(){
    const number = Math.ceil(Math.random() * IMG_NUMBER);
    const imgNumber = number;
    const img = new Image();
    img.src = `images/${imgNumber}.jpg`
    img.classList.add('bgImg');
    bgImage.appendChild(img);
    return number;
}

function delImg(){
    bgImage.removeChild(bgImage.firstChild)}

function init(){
    getImage();
    setInterval(getImage,5000)
    setInterval(delImg,5000)
};

init();