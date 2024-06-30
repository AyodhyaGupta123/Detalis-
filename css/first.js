
var istatus =  document.querySelector("h5")

var addFriends = document.querySelector("#add")
var removeFriends = document.querySelector("#remove")

addFriends.addEventListener("click",function(){
    istatus.innerHTML = "Friends"
    istatus.style.color = "Green"
});

removeFriends.addEventListener("click",function(){
    istatus.innerHTML = "Stranger"
    istatus.style.color = "Red"
});