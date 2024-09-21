let player1=( Math.floor(Math.random()*6)+1);
addersplayer1="./images/dice"+player1+".png";
document.querySelector(".img1").setAttribute("src",addersplayer1);

let player2=( Math.floor(Math.random()*6)+1);
addersplayer2="./images/dice"+player2+".png";
document.querySelector(".img2").setAttribute("src",addersplayer2);

if (player1>player2) {
    let result="player 1 is winner"+player1;
    document.querySelector("h1").innerHTML=result;
    
} else if(player2>player1) {
    let result="player 2 is winner"+player2;
    document.querySelector("h1").innerHTML=result;
}
else{
    let result="match is draw!." ;
    document.querySelector("h1").innerHTML=result;
}
