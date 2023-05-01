import Color from "https://colorjs.io/dist/color.js";

let red, blue, green, red1, blue1, green1, red2, blue2, green2, rgb, color1, color2;
let fadeColor;
let level1Button = document.getElementById("level1");
let level2Button = document.getElementById("level2");
let level3Button = document.getElementById("level3");
let timer = document.getElementById("timer");
let pointCounter = document.getElementById("pointCounter");
let gameDiv = document.getElementById("game");
let gameColor = document.getElementById("randomColor");
let level1colorCode1 = document.getElementById("colorCode1");
let level1colorCode2 = document.getElementById("colorCode2");
let level1colorCode3 = document.getElementById("colorCode3");
let results = document.getElementById("results");
var resultTable = document.getElementById("resultTable");
let colorPicker = document.getElementById("color-picker");
const defaultColor = "#0000ff";
let nextButton = document.getElementById("nextButton");


var colordiv1 = document.getElementById('colorDiv1');
var colordiv2 = document.getElementById('colorDiv2');
var colordiv3 = document.getElementById('colorDiv3');
let seconds = 0;
let points = 0;
let arrChoices = [];
let arrColors = [];
let rounds = 0;

// Startup Colorpicker
window.addEventListener("load", startup, false);
function startup() {
  colorPicker.value = defaultColor;
  colorPicker.addEventListener("change", level2, false);
  colorPicker.select();
}

level1Button.addEventListener("click", startLevel1);
function startLevel1() {
  points = 0;
  var resultRowCount = resultTable.rows.length;
  for (let i = 1; i < resultRowCount; i++) {
    resultTable.deleteRow(1);
  }
  seconds = 16;
  pointCounter.innerHTML = points;
  startButton.disabled = true;
  gameColor.style.display = 'block';

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
  level1();
}

level2Button.addEventListener("click", startLevel2);
level3Button.addEventListener("click", startLevel3);

colordiv1.addEventListener("click", () => {
    rounds++;
    if (seconds > 0) {
      if (arrChoices[0] == rgb) {
        points++;
        pointCounter.innerHTML = points;
        var newRow = resultTable.insertRow(-1);
        var cell0 = newRow.insertCell(0);
        cell0.innerHTML = rounds;
        var cell1 = newRow.insertCell(1);
        cell1.style.backgroundColor = rgb;
        var cell2 = newRow.insertCell(2);
        cell2.style.backgroundColor = arrChoices[0];
        var cell3 = newRow.insertCell(3);
        cell3.innerHTML = "100%";
      } else {
        var newRow = resultTable.insertRow(-1);
        var cell0 = newRow.insertCell(0);
        cell0.innerHTML = rounds;
        var cell1 = newRow.insertCell(1);
        cell1.style.backgroundColor = rgb;
        var cell2 = newRow.insertCell(2);
        cell2.style.backgroundColor = arrChoices[0];
        var cell3 = newRow.insertCell(3);
        cell3.innerHTML = "0%";
      }
      level1();
    }
  } )

colordiv2.addEventListener("click", () => {
    rounds++;
    if (seconds > 0) {
      if (arrChoices[1] == rgb) {
        points++;
        pointCounter.innerHTML = points;
        var newRow = resultTable.insertRow(-1);
        var cell0 = newRow.insertCell(0);
        cell0.innerHTML = rounds;
        var cell1 = newRow.insertCell(1);
        cell1.style.backgroundColor = rgb;
        var cell2 = newRow.insertCell(2);
        cell2.style.backgroundColor = arrChoices[0];
        var cell3 = newRow.insertCell(3);
        cell3.innerHTML = "100%";
      } else {
        var newRow = resultTable.insertRow(-1);
        var cell0 = newRow.insertCell(0);
        cell0.innerHTML = rounds;
        var cell1 = newRow.insertCell(1);
        cell1.style.backgroundColor = rgb;
        var cell2 = newRow.insertCell(2);
        cell2.style.backgroundColor = arrChoices[0];
        var cell3 = newRow.insertCell(3);
        cell3.innerHTML = "0%";
      }
      level1();
    }
  } )

colordiv3.addEventListener("click", () => {
    rounds++;
    if (seconds > 0) {
      if (arrChoices[2] == rgb) {
        points++;
        pointCounter.innerHTML = points;
        var newRow = resultTable.insertRow(-1);
        var cell0 = newRow.insertCell(0);
        cell0.innerHTML = rounds;
        var cell1 = newRow.insertCell(1);
        cell1.style.backgroundColor = rgb;
        var cell2 = newRow.insertCell(2);
        cell2.style.backgroundColor = arrChoices[0];
        var cell3 = newRow.insertCell(3);
        cell3.innerHTML = "100%";
      } else {
        var newRow = resultTable.insertRow(-1);
        var cell0 = newRow.insertCell(0);
        cell0.innerHTML = rounds;
        var cell1 = newRow.insertCell(1);
        cell1.style.backgroundColor = rgb;
        var cell2 = newRow.insertCell(2);
        cell2.style.backgroundColor = arrChoices[0];
        var cell3 = newRow.insertCell(3);
        cell3.innerHTML = "0%";
      }

      level1();
    }
  } )

colorPicker.addEventListener("change", level2, false);

nextButton.addEventListener("click", level3)

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


  function fadeColorBox() {
    clearInterval(fadeColor);
    fadeColor = setInterval(function() {
      if (!gameColor.style.opacity) {
        gameColor.style.opacity = 1;
    }
    if (gameColor.style.opacity > 0) {
        gameColor.style.opacity -= 0.05;
    } else {
        clearInterval(fadeColor);
    }
    }, 100);
  }

  function level1() {
    getRandomColor();
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

  function level2() {
    rounds++;
    const level2colorCodeHex = event.target.value;
  
    // Convert Hex to RGB
    let level2colorCodeRGB = [0, 0, 0]
    level2colorCodeRGB[0] = parseInt(level2colorCodeHex.slice(1, 3), 16);
    level2colorCodeRGB[1] = parseInt(level2colorCodeHex.slice(3, 5), 16);
    level2colorCodeRGB[2] = parseInt(level2colorCodeHex.slice(5, 7), 16);
    let level2colorCode = "rgb("+level2colorCodeRGB[0]+", "+level2colorCodeRGB[1]+", "+level2colorCodeRGB[2]+")";
      
    if (level2colorCode == rgb && seconds > 0) {
      points++;
        
      pointCounter.innerHTML = points;
      var newRow = resultTable.insertRow(-1);
      var cell0 = newRow.insertCell(0);
      cell0.innerHTML = rounds;
      var cell1 = newRow.insertCell(1);
      cell1.style.backgroundColor = rgb;
      var cell2 = newRow.insertCell(2);
      cell2.style.backgroundColor = level2colorCode;
      var cell3 = newRow.insertCell(3);
      cell3.innerHTML = "100%"
    } else if (seconds > 0) {
      var newRow = resultTable.insertRow(-1);
      var cell0 = newRow.insertCell(0);
      cell0.innerHTML = rounds;
      var cell1 = newRow.insertCell(1);
      cell1.style.backgroundColor = rgb;
      var cell2 = newRow.insertCell(2);
      cell2.style.backgroundColor = level2colorCode;
      var cell3 = newRow.insertCell(3);
      cell3.innerHTML = calcAccuracy(level2colorCodeRGB);
    }
  }

  function level3() {
    let redLevel3 = document.getElementById("redLevel3");
    let greenLevel3 = document.getElementById("greenLevel3");
    let blueLevel3 = document.getElementById("blueLevel3");

    let level3colorCodeRGB = [redLevel3, greenLevel3, blueLevel3];
    let level3colorCode = "rgb("+redLevel3+", "+greenLevel3+", "+blueLevel3+")";
    
    if (level3colorCode == rgb && seconds > 0) {
      points++;
      pointCounter.innerHTML = points;
      var newRow = resultTable.insertRow(-1);
      var cell0 = newRow.insertCell(0);
      cell0.innerHTML = rounds;
      var cell1 = newRow.insertCell(1);
      cell1.style.backgroundColor = rgb;
      var cell2 = newRow.insertCell(2);
      cell2.style.backgroundColor = level3colorCode;
      var cell3 = newRow.insertCell(3);
      cell3.innerHTML = "100%"
    } else if (seconds > 0) {
      var newRow = resultTable.insertRow(-1);
      var cell0 = newRow.insertCell(0);
      cell0.innerHTML = rounds;
      var cell1 = newRow.insertCell(1);
      cell1.style.backgroundColor = rgb;
      var cell2 = newRow.insertCell(2);
      cell2.style.backgroundColor = level3colorCode;
      var cell3 = newRow.insertCell(3);
      cell3.innerHTML = calcAccuracy(level3colorCodeRGB);
    }

  }
  function calcAccuracy(array) {
    let rgbArray = new Color('lch', array);
    let rgbRGB = new Color('lch', [red, green, blue]);
    let accuracy = Math.floor((1-(rgbArray.deltaE(rgbRGB)/370))*100)+ "%";
    console.log(accuracy);
    return accuracy;
  }