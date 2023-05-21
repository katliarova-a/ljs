let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let field_game = document.getElementsByClassName("field_game");
canvas.width= document.documentElement.clientWidth*0.513;
canvas.height = document.documentElement.clientHeight*0.7;
let width_canvas = canvas.width;
let height_canvas= canvas.height;

let ground = new Image();
ground.src = "picture/bg_image.jpg";
let person = new Image();
person.src = "picture/persona1.png";
let block = new Image();
block.src = 'picture/block.png';

personStart = false;
groundX=0;
personY=height_canvas*0.38;
time=0;
blockX=width_canvas;
move="none";

ground.onload = function () {
    context.drawImage(ground, 0, 0);
    context.drawImage(person, width_canvas/9, height_canvas*0.38);
    context.font = '10px Arial Black';
    context.fillStyle = '#555';
    context.fillText('Нажмите Enter для старта', width_canvas/10, height_canvas/5);
}
document.addEventListener("keydown", moveUp);

function moveUp(event) {
    if (event.key=="Enter" && personStart == false) {
        personStart = true;
        groundX=0;
        personY=height_canvas*0.38;
        time=0;
        blockX=width_canvas;
        move="none";
        requestAnimationFrame(draw);}
    if (event.key=="w" && move=="none"){
        move="up";
    }
    if(event.key=="a"){
        console.log(blockX, personY)
    }
    }
function draw(){
    if (personStart==true)  requestAnimationFrame(draw); 
    time++;
    context.clearRect (0, 0, width_canvas, height_canvas);
    // Анимация фона
    groundX -= 2;
    if (groundX <= -width_canvas) {groundX = 0;}
    // Отрисовка
    context.drawImage(ground, groundX, 0);
    context.drawImage(person, width_canvas/9, personY);
    context.drawImage(block, blockX, height_canvas*0.43);

    // Анимация персонажа
    if (time % 64 == 0 && move=="none") {
        person.src = 'picture/persona1.png';
    } 
    else if (time % 32 == 0 && move=="none") {
        person.src = 'picture/persona2.png';
    }
    
    // Появление припятствия
    blockX -= 2;
    if (blockX <= -64) {blockX = width_canvas;}

    // Прыжки
    if (move == 'up') {
        person.src = 'picture/persona3.png'
        personY -= 2;
        if (personY <= height_canvas*0.19) {move = 'down'; personY = height_canvas*0.19;}
    } 
    else if (move == 'down') {
        personY += 2;
        if (personY >= height_canvas*0.38) {person.src = 'picture/persona1.png';move = 'none'; personY = height_canvas*0.38;}
    }

    // Столкновение с препятствием
    if (blockX > width_canvas/9-60 && blockX < width_canvas/9+90 && personY+80>height_canvas*0.43) {
        personStart=false
    }
    // Вывод итогов
    if (personStart == false) {context.fillText('Ваш счёт ' + time, 450, 160);}
}
