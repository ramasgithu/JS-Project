let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;
let highestScore=0;
 
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

    let ranIdx=Math.floor(Math.random()*3);
    let ranColor=btns[ranIdx];
    let ranBtn=document.querySelector(`.${ranColor}`);
    gameSeq.push(ranColor);
    console.log(gameSeq);
    gameFlash(ranBtn);
}

function check(idx){
   if(gameSeq[idx]===userSeq[idx]){
    if(gameSeq.length==userSeq.length){
       setTimeout(levelUp,1000);
    }
   }
   else{
    h2.innerHTML=`Game Over!<b> Your score was ${level}</b><br/> Press any key to start the game.`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },150)
    let score=level;
    if(highestScore<level){
        highestScore=level;
        document.querySelector("h3").innerText=`Highest Score is ${highestScore}`;
    }
    reset();
   }
}

function btnPress(){
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    check(userSeq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}