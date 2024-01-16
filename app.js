document.getElementById("button").addEventListener("click", function () {
  document.getElementById("confirmation").style.display = "block";

  setTimeout(function () {
    document.getElementById("confirmation").style.display = "none";
  }, 5000);
});



let seconds = 0;
let timerInterval = null;

document.getElementById("start_stop").addEventListener("click", function () {
  if (timerInterval == null) {
    timerInterval = setInterval(updateTimer, 1000);
  } else {
    clearInterval(timerInterval);
    timerInterval = null;
  }
});

function updateTimer() {
  document.getElementById('timer').innerText = seconds++;
}
