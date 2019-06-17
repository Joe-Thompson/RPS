var playOne= document.querySelector("#playOne");
var playTwo= document.querySelector("#playTwo");
var reSet= document.querySelector("#reSet");
var winNum= document.querySelector("input");
var p1Display= document.querySelector("#p1S");
var p2Display= document.querySelector("#p2S");
var winTotal= document.querySelector("#winTotal");
var lis= document.querySelectorAll("li");
var gameOver= false;
var winningScore= 5;


var p1Score=  0;
var p2Score= 0;

for (var i= 0; i< lis.length; i++){
  lis[i].addEventListener("mouseover", function() {
    this.classList.add("hover");
  });
};
for (var i= 0; i< lis.length; i++){
  lis[i].addEventListener("mouseout", function() {
    this.classList.remove("hover");
  });
};

playOne.addEventListener("click", function() {
  if (!gameOver){
    p1Score++;
    displayColor(p1Score, p2Score);
  }
  if (p1Score === winningScore) {
    p1Display.classList.add("winner");
    gameOver= true;
  }
  p1Display.textContent= p1Score;  
});

playTwo.addEventListener("click", function() {
  if (!gameOver) {
    p2Score++;
    displayColor(p1Score, p2Score);
  }
  if (p2Score === winningScore){
    p2Display.classList.add("winner");
    gameOver= true;
  }
  p2Display.textContent= p2Score;  
});

reSet.addEventListener("click", function() {
reset();
});

function reset() {
  p1Display.textContent= 0;
  p1Score= 0;
  p2Display.textContent= 0;
  p2Score= 0;
  gameOver= false;
  p1Display.classList.remove("winner","loser","start");
  p2Display.classList.remove("winner","loser","start");
  winTotal.textContent= winNum.value;
  winNum.textContent= 5;
};

winNum.addEventListener("change", function() {
  winTotal.textContent= this.value;
  winningScore= Number(this.value);
  reset();
});

function displayColor(p1Score, p2Score) {
  if (p1Score === p2Score) {
    p1Display.classList.add("start");
    p2Display.classList.add("start");
    } else if (p1Score< p2Score) {
      p1Display.classList.remove("start","winner");
      p2Display.classList.remove("start","loser");
      p1Display.classList.add("loser");
      p2Display.classList.add("winner");
    } else if (p1Score> p2Score) {
      p1Display.classList.remove("start", "loser");
      p1Display.classList.add("winner");
      p2Display.classList.remove("start", "winner");
      p2Display.classList.add("loser");
    }
  };