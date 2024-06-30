function makebubble(){
   
    var container = "";

for(var i=1;i<67;i++){

    var num = Math.floor(Math.random()* 100);

    var red = Math.floor(Math.random()* 256);
    var green = Math.floor(Math.random()* 256);
    var blue = Math.floor(Math.random()* 256);

    container += `<div style="background-color: rgb(${red},${green},${blue})"; class="bubble w-30 h-30 text-3xl flex items-center justify-center rounded-full wrap">${num}</div>`;
}

document.querySelector(".bubbles").innerHTML = container;
setInterval()
makebubble({
    
},1000);
}

 makebubble();

