let Timer = 60;
let score = 0;
let hitrn= 0;

function increaseScore(){
    score += 10;
    document.querySelector(".incscore").textContent= score;
}

function getNewHit(){
    hitrn =Math.floor(Math.random()*10);
    document.querySelector(".hitval").textContent= hitrn;
}
function makeBubble(){ 
    let clutter= '';
    for (let i = 0; i <=280 ; i++) {
        clutter += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
    }
    document.querySelector("#sub-btm").innerHTML=clutter;
}
function runTimer(){
    let timerInt = setInterval(() => {
        if(Timer>0){
            Timer--;
            document.querySelector(".timerval").textContent = Timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector("#sub-btm").innerHTML= `<h1>Game Over</h1>`;
        }
    }, 1000);
}

document.querySelector("#sub-btm").addEventListener("click",function(e){
    let clickedNum=(Number(e.target.textContent));
    if(clickedNum === hitrn ){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})

getNewHit();
runTimer();
makeBubble();

