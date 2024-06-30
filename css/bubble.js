var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore(){
    score+= 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}
 
 function makebubble(){

    var clutter = "";

 for(var i=0; i<=139; i++){
    var rn = Math.floor(Math.random()*100)
    var red = Math.floor(Math.random()* 256);
    var green = Math.floor(Math.random()* 256);
    var blue = Math.floor(Math.random()* 256);
    clutter+=`<div style ="background-color: rgb(${red},${green},${blue})"; class="bubble">${rn}</div>`;
 }

 document.querySelector(".pbtm").innerHTML= clutter ;
 }

 function runTimer(){
    var timerint = setInterval(function(){
       if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
       }else{
        clearInterval(timerint);
        document.querySelector(".pbtm").innerHTML = `<h1>Game Over</h1>`;
       }
    },1000);
 }

 document.querySelector(".pbtm")
  addEventListener("click",function(dets){
   var clicknum = console.log(Number(dets.target.textContent));
   if(clicknum === hitrn){
      runTimer();
      makebubble();
   }
      getNewHit();
      increaseScore();
     
 });

 runTimer();
 makebubble();
 getNewHit();
 increaseScore();



 