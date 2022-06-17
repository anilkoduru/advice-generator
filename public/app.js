var dice = document.getElementById("empty");
dice.addEventListener("click",function(){
    dice.style.boxShadow = "1px 1px 20px hsl(150, 100%, 66%)";
    setTimeout(() => {
        dice.style.boxShadow = "0px 0px 0px hsl(150, 100%, 66%)";
    }, 500);
    window.location.reload();
})