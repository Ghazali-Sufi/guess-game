let winAudio = new Audio("win.mp3");
let failAudio = new Audio("fail.mp3");
let nearFail = new Audio("nearFail.mp3");
var count = 0;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");

checkBtn.addEventListener("click", function () {
  count++;

  const guessNumber = Number(document.querySelector(".guess").value);

  if (!guessNumber) {
    document.querySelector(".message").textContent = "⛔ No Number!";
  } else if (guessNumber !== secretNumber) {
    document.querySelector(".message").textContent =
      guessNumber > secretNumber ? "🆙 Too High" : "⬇ Too Low";
    document.querySelector(".guess").value = "";

    if (count === 4) {
      nearFail.play();
    } else if (count === 5) {
      failAudio.play();
      document.querySelector(".message").innerHTML =
        "<h4> No attempt left, try again! 😭</h4>";
      checkBtn.disabled = true;
      checkBtn.style.backgroundColor = "rgba(220, 220, 220, 0.677)";
      // checkBtn.style.cursor = "pointer";
    }
  } else if (count === 5 && guessNumber === secretNumber) {
    winAudio.play();
    document.querySelector(".message").textContent = "🎉 Correct Number";
    document.querySelector(".lets-play").textContent = "Congratulations! 🤩";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "15rem";
    checkBtn.style.backgroundColor = "rgba(220, 220, 220, 0.677)";
    checkBtn.style.cursor = "default";
    checkBtn.disabled = true;
  } else if (guessNumber === secretNumber) {
    winAudio.play();
    document.querySelector(".message").textContent = "🎉 Correct Number";
    document.querySelector(".lets-play").textContent = "Congrats! 🤩";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "15rem";
    checkBtn.style.backgroundColor = "rgba(220, 220, 220, 0.677)";
    checkBtn.style.cursor = "default";
    checkBtn.disabled = true;
  }
});

againBtn.addEventListener("click", () => {
  count = 0;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log("the again... " + secretNumber);
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "10rem";
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".lets-play").textContent = "Let's Play 🤩";
  checkBtn.disabled = false;
  checkBtn.style.cursor = "pointer";
  document.querySelector("body").style.backgroundColor = "#f0db4f";
  checkBtn.style.backgroundColor = "#388697";
});
