
var countdown = document.getElementById("countdown");
var countdownNumber = document.getElementById("countdown-number");


var count = 20;


function startCountdown() {
  countdownNumber.innerHTML = count; 
  count--; 
  if (count < 0) {
    count = 20; 
  }
}

var countdownInterval = setInterval(startCountdown, 1000); 