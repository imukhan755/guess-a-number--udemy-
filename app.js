"use strict";
let secretNumber = Math.trunc(Math.random() * 10) + 1;
let score = 10;
let highScore = 0;
//document.querySelector(".number").textContent = secretNumber;
document.querySelector(".btn-check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //if no input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ NO Number!";
  }
  //if wins game
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent =
      "Correct Number! - 🏆You Win the Game🏆";
    //change bg color
    document.querySelector("body").style.backgroundColor = "rgb(54, 179, 64)";
    document.querySelector(".number").style.width = "20rem";
    document.querySelector(".number").textContent = "🏆";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highsocre").textContent = highScore;
    }
    //user guess is high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "Your guess too high😯 one more try";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "😔You Lose the Game Please reset and enjoy";
      document.querySelector(".score").textContent = 0;
      //change bg color
      document.querySelector("body").style.backgroundColor = "rgb(223, 17, 17)";
      document.querySelector(".number").style.width = "0rem";
      document.querySelector(".number").textContent = "💥";
    }
  }
  //user guess is low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "Your guess is too low😯 one more try";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "😔You Lose the Game Please reset and enjoy";
      document.querySelector(".score").textContent = 0;
      //change bg color
      document.querySelector("body").style.backgroundColor = "rgb(223, 17, 17)";
      document.querySelector(".number").style.width = "0rem";
      document.querySelector(".number").textContent = "💥";
    }
  }
});
document.querySelector(".btn-reset").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 10) + 1;
  document.querySelector("body").style.backgroundColor = "rgb(8, 8, 8)";
  document.querySelector(".score").textContent = 10;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").style.width = "10rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
