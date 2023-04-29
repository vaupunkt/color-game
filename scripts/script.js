let red, blue, green, rgb;
let startButton = document.getElementById("startButton");
let timer = document.getElementById("timer");

function getRandomColor() {
    red = Math.floor(Math.random() * (255 - 0) );
    blue = Math.floor(Math.random() * (255 - 0) );
    green = Math.floor(Math.random() * (255 - 0) );
    rgb = "rgb("+red+", "+green+", "+blue+")";
    return rgb;
  }

startButton.addEventListener("click", game);

function game() {
    getRandomColor();
    let seconds = 0;
    const clickSound = new Audio('click-sound.mp3');
    clickSound.play();
    let intervalId = setInterval(() => {
      seconds++;
      timer.innerHTML = seconds;
      if (seconds == 10) {
        clearInterval(intervalId);
      }
    }, 1000);
    console.log("click");
    console.log(rgb);
    document.getElementById("randomColor").style.backgroundColor = rgb;
  }
