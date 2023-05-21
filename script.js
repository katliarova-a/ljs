let div_number = document.getElementById("game_number");
let div_clicker = document.getElementById("game_clicker");
let div_dino = document.getElementById("game_dino");

let text_rules=document.getElementById("rules_game_number");
let play_game_number=document.getElementById("play_game_number");
let answer = document.getElementById("answer");
let prompt = document.getElementById("prompt");
let restart_game_number = document.getElementById("restart_game_number");

function game_number(){
    div_number.style.display = "block";
    div_clicker.style.display = "none";
    div_dino.style.display = "none";
}
function game_clicker(){
    div_number.style.display = "none";
    div_clicker.style.display = "block";
    div_dino.style.display = "none";
}
function game_dino(){
    div_number.style.display = "none";
    div_clicker.style.display = "none";
    div_dino.style.display = "block";
}
function off_game(){
    div_number.style.display = "none";
    div_clicker.style.display = "none";
    div_dino.style.display = "none";
}
let random_number;
let count_prompt = 0;
function start_game_number(){
    random_number=Math.floor(Math.random()*99+1);
    count_prompt = 0;
    console.log(random_number);
    text_rules.style.display = "none";
    restart_game_number.style.display = "none";
    play_game_number.style.display = "block";
    answer.value = "";
    prompt.innerText = "Ну давай, угадай"
}
function answer_game_number(){
    count_prompt++
    if (random_number > Number(answer.value)){
        prompt.innerText="Введи число побольше"
    }
    else if (random_number < Number(answer.value)){
        prompt.innerText="Введи число поменьше"
    }
    else if (random_number == Number(answer.value)){
        prompt.innerText="Ты угадал!  "+"И потратил на это  "+count_prompt+"  попыток."
        restart_game_number.style.display = "block";
    }
}

let magazins_left = document.getElementsByClassName("left");
picture_left=["picture/ff.jpg","picture/fff.jpg","picture/ffff.jpg","picture/fffff.jpg"];
for (let i=0; i<magazins_left.length; i++){
    magazins_left[i].style.backgroundImage = "url("+picture_left[i]+")";
}
let magazins_right = document.getElementsByClassName("right");
picture_left=["picture/candy.png","picture/cake.png","picture/choklade.png","picture/donat.png"];
for (let i=0; i<magazins_right.length; i++){
    magazins_right[i].style.backgroundImage = "url("+picture_left[i]+")";
}
let count_click=1;
let money = 0;
count.innerText = money+"$";
function clicker(){
    money = money+count_click;
    count.innerText = money+"$";
    if (money>=cost_fabric.innerText){
        fabric.style.backgroundColor = "orange";
    }
}

function buy(num){
   this.hasOwnProperty("this")

    if (num==1 && money>=10){
        money-=10;
        count.innerText = money+"$";
        div_clicker.style.backgroundImage = "url(picture/ff.jpg)";
        document.getElementsByClassName("left")[num-1].style.filter = "grayscale(0%)";
        document.getElementsByClassName("text_magazine")[num-1].innerText = "";
    }
    if (num==5 && money>=10){
        money-=10;
        count.innerText = money+"$";
        click_object.src = "picture/cake.png";
        document.getElementsByClassName("right")[num-4].style.filter = "grayscale(0%)";
        document.getElementsByClassName("text_magazine")[num-1].innerText = "";
    }

    if(num==0){
        click_object.src = "picture/candy.png";
    }
}
function buy_fabric(){
    if (money>=Number(cost_fabric.innerText)){
        money=money - cost_fabric.innerText;
        count.innerText = money+"$";
        cost_fabric.innerText = Number(cost_fabric.innerText)*2;
        count_click++;
        counf_fabric.innerText = Number(counf_fabric.innerText)+1;
        if (money<=Number(cost_fabric.innerText))
            fabric.style.backgroundColor = "rgb(224, 222, 226)";
    }
}