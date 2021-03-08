const canvas = document.getElementById("js-canvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("controls__color");
const range = document.getElementById("js-range");
const mode = document.getElementById("js-mode");
const saveBtn = document.getElementById("js-save");

const INITIAL_COLOR = "black";
const CANVAS_SIZE = 500;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;
ctx.fillStyle = INITIAL_COLOR;

let painting = false;
let filling = false;
let colorBorder = false;

function startPainting() {
  painting = true;
}

function stopPainting() {
  painting = false;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function colorReset() {
  colors[0].style.border = "none";
  colors[1].style.border = "none";
  colors[2].style.border = "none";
  colors[3].style.border = "none";
  colors[4].style.border = "none";
  colors[5].style.border = "none";
  colors[6].style.border = "none";
  colors[7].style.border = "none";
  colors[8].style.border = "none";
}

function clickChangeColor(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  colorReset();
  event.target.style.border = "4px solid White";
  ctx.fillStyle = color;
}

function handleRangeChange(event) {
  const size = event.target.value;
  ctx.lineWidth = size;
}

function handleModeClick(event) {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
}

function handleCanvasClick(event) {
  if (filling) {
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }
}
function handleSaveClick(event) {
  const image = canvas.toDataURL("image/jpeg");
  const link = document.createElement("a");
  link.href = image;
  link.download = "paint";
  link.click();
}

function handleCM(event) {
  event.preventDefault();
  alert("마우스 우클릭이 불가합니다 ㅠㅠ");
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleCM);
}

if (saveBtn) {
  saveBtn.addEventListener("click", handleSaveClick);
}

Array.from(colors).forEach((color) =>
  color.addEventListener("click", clickChangeColor)
);
// (array안의 아이템들을 대표함, 이름 아무거나해도 상관x)

if (range) {
  range.addEventListener("input", handleRangeChange);
}

if (mode) {
  mode.addEventListener("click", handleModeClick);
}
