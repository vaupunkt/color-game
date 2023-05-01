let red, blue, green, red1, blue1, green1, red2, blue2, green2, rgb, color1, color2;
let fadeColor;
let startButton = document.getElementById("startButton");
let timer = document.getElementById("timer");
let pointCounter = document.getElementById("pointCounter");
let gameDiv = document.getElementById("game");
let gameColor = document.getElementById("randomColor");
var colordiv1 = document.getElementById('colorDiv1');
var colordiv2 = document.getElementById('colorDiv2');
var colordiv3 = document.getElementById('colorDiv3');
let seconds = 11;
let points = 0;
let arrChoices = [];
let arrColors = [];

startButton.addEventListener("click", start);
colordiv1.addEventListener("click", function() {
  if (seconds > 0) {
    if (arrChoices[0] == rgb) {
      points++;
      pointCounter.innerHTML = points;
    }
    game();
  }
} )

colordiv2.addEventListener("click", function() {
  if (seconds > 0) {
    if (arrChoices[1] == rgb) {
      points++;
      pointCounter.innerHTML = points;
    }
    game();
  }
} )

colordiv3.addEventListener("click", function() {
  if (seconds > 0) {
    if (arrChoices[2] == rgb) {
      points++;
      pointCounter.innerHTML = points;
    }
    game();
  }
} )

function getRandomColor() {
    // getting random rgb values for color
    red = Math.floor(Math.random() * (255 - 0) );
    blue = Math.floor(Math.random() * (255 - 0) );
    green = Math.floor(Math.random() * (255 - 0) );
    rgb = "rgb("+red+", "+green+", "+blue+")";
 
    // giving element "randomColor"
    gameColor.style.backgroundColor = rgb;
 
    return rgb;
  }

function start() {
  points = 0;
  pointCounter.innerHTML = points;
  startButton.disabled = true;

  // changing seconds every 1000 milliseconds (=1Second)
  let intervalId = setInterval(() => {
    seconds--;
    timer.innerHTML = seconds;
    if (seconds == -1) {
      clearInterval(intervalId);
      seconds = 0;
      timer.innerHTML = seconds;
      startButton.disabled = false;
    }
  }, 1000);
  
  game();
}

function game() {
  getRandomColor();

  
  difficulty1();

  }

  function fadeColorBox() {
    clearInterval(fadeColor);
    fadeColor = setInterval(function() {
      if (!gameColor.style.opacity) {
        gameColor.style.opacity = 1;
    }
    if (gameColor.style.opacity > 0) {
        gameColor.style.opacity -= 0.05;
        console.log(gameColor.style.opacity);
    } else {
        clearInterval(fadeColor);
    }
    }, 100);
  }

  function difficulty1() {
  gameColor.style.opacity = 1;
  clearInterval(fadeColor);
  setTimeout(fadeColorBox, 500);

  do {
    const randomRangeMin = (70);
    const randomRangeMax = (130);

    red1 =  Math.floor(red * (Math.random() * (randomRangeMax - randomRangeMin) + randomRangeMin )/100);
    green1 = Math.floor(green * (Math.random() * (randomRangeMax - randomRangeMin) + randomRangeMin )/100);     
    blue1 = Math.floor(blue * (Math.random() * (randomRangeMax - randomRangeMin) + randomRangeMin )/100);
    red2 =  Math.floor(red * (Math.random() * (randomRangeMax - randomRangeMin) + randomRangeMin )/100);
    green2 = Math.floor(green * (Math.random() * (randomRangeMax - randomRangeMin) + randomRangeMin )/100);     
    blue2 = Math.floor(blue * (Math.random() * (randomRangeMax - randomRangeMin) + randomRangeMin )/100);

    color1 = "rgb("+red1+", "+green1+", "+blue1+")";
    color2 = "rgb("+red2+", "+green2+", "+blue2+")";

  } while (rgb === color1 | rgb === color2 | color1 === color2);
    
    arrChoices = [rgb, color1, color2]
    arrChoices.sort(() => Math.random() - 0.5);
    console.log(arrChoices);
    colordiv1.style.backgroundColor = arrChoices[0];
    colordiv1.style.width = '50px';
    colordiv1.style.height = '50px';
    document.getElementById("colorCode1").innerHTML = arrChoices[0];

    colordiv2.style.backgroundColor = arrChoices[1];
    colordiv2.style.width = '50px';
    colordiv2.style.height = '50px';
    document.getElementById("colorCode2").innerHTML = arrChoices[1];

    colordiv3.style.backgroundColor = arrChoices[2];
    colordiv3.style.width = '50px';
    colordiv3.style.height = '50px';
    document.getElementById("colorCode3").innerHTML = arrChoices[2];
  }

  function difficulty2() {
    let next = document.getElementById("next");
    
  }