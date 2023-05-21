let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let field_game = document.getElementsByClassName("field_game");
canvas.width= document.documentElement.clientWidth*0.513;
canvas.height = document.documentElement.clientHeight;
let width_canvas = canvas.width;
let height_canvas= canvas.height;
console.log(width_canvas, height_canvas);

let person = new Image();
person.src = "bob/bob.png";
let block = new Image();
block.src = 'bob/pat.png';
let ground = new Image();
ground.src = "bob/bd.png";

personStart = false;
groundX=0;
personY=200;
time=0;
blockX=972;
move="none";

ground.onload = function () {
    context.drawImage(ground, 0, 0);
    context.drawImage(person, width_canvas/5, height_canvas/5);
    context.font = '10px Arial Black';
    context.fillStyle = '#555';
    context.fillText('Нажмите любую клавишу', width_canvas/10, height_canvas/5);
}
document.addEventListener("keydown", moveUp);

function moveUp(event) {
    if (event.key=="Enter" && personStart == false) {
        personStart = true;
        requestAnimationFrame(draw);}
    if (event.code=="Space" && move=="none"){
        move="up";
    }
    }
function draw(){
    if (personStart==true)  requestAnimationFrame(draw); 
    time++;
    context.clearRect (0, 0, 972, 300);
    // Анимация земли и неба
    groundX -= 2;
    if (groundX <= -972) {groundX = 0;}
    // Отрисовка
    context.drawImage(ground, groundX, 0);
    context.drawImage(person, 40, personY);
    // Анимация динозавра
    if (time % 64 == 0) {person.src = 'bob/bob.png';
    } else if (time % 32 == 0) {person.src = 'bob/bob2.png';}
    // Появление кактуса
    context.drawImage(block, blockX, 200);
    blockX -= 2;
    if (blockX <= -64) {blockX = 972;}
    /*if (blockX > 20 && blockX < 60 && personY > 136) {
        personStart=false
    }*/
    // Прыжки
    if (move == 'up') {
        personY -= 2;
        if (personY <= 100) {move = 'down'; personY = 100;}
    } else if (move == 'down') {
        personY += 2;
        if (personY >= 200) {move = 'none'; personY = 200;}
    }
    if (personStart == false) {context.fillText('Ваш счёт ' + time, 450, 160);}
}
