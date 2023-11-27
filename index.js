var l="./images/hand";
var h=".png";
var t=Math.floor((Math.random()*3)+1);
document.querySelectorAll("img")[0].setAttribute("src",l+t+h);
var j=Math.floor((Math.random()*3)+1);
document.querySelectorAll("img")[1].setAttribute("src",l+j+h);
if(t==j){
    document.querySelector("h1").innerHTML='<en>Draw</en><img src="./images/Draw.png">';
}
if(t==1&&j==2){
    document.querySelector("h1").innerHTML='<en>Player 1 Wins!</en><img src="./images/PR.png">';
}
if(t==2&&j==1){
    document.querySelector("h1").innerHTML='<en>Player 2 Wins!</en><img src="./images/PR.png">';
}
if(t==2&&j==3){
    document.querySelector("h1").innerHTML='<en>Player 1 Wins!</en><img src="./images/RS.png">';
}
if(t==3&&j==2){
    document.querySelector("h1").innerHTML='<en>Player 2 Wins!</en><img src="./images/RS.png">';
}
if(t==1&&j==3){
    document.querySelector("h1").innerHTML='<en>Player 2 Wins!</en><img src="./images/SP.png">';
}
if(t==3&&j==1){
    document.querySelector("h1").innerHTML='<en>Player 1 Wins!</en><img src="./images/SP.png">';
}