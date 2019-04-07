let numSquares = 6;
let colors;
let pickedColor;
let squares = document.querySelectorAll(".square");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");
let messageDisplay = document.querySelector("#message");
let colorDisplay = document.querySelector("#colorDisplay")

const randomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`
}

const pickColor = () => {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random]
}

const generateRandomColor = (num) => {
  let arr = [];
  for(i=0; i<num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

const setup = () => {
  colors = generateRandomColor(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(i=0; i<numSquares; i++) {
   squares[i].style.backgroundColor = colors[i];
  }
  for(i=numSquares; i<squares.length; i++) {
    squares[i].style.backgroundColor = "rgba(0, 0, 0, 0)"
  }
}

const toggle = () => {
  if(numSquares === 6) {
    modeButtons[0].classList.remove("on");
    modeButtons[1].classList.add("on");
  } else {
    modeButtons[0].classList.add("on");
    modeButtons[1].classList.remove("on");
  }
}

toggle();
colors = generateRandomColor(numSquares);
pickedColor = colors[3];
colorDisplay.innerHTML = pickedColor;

resetButton.addEventListener("click", () => {
  setup();
});

for(i=0; i<2; i++) {
  modeButtons[i].addEventListener("click", function() {
    if(this.textContent === "easy") {
      numSquares = 3;
      toggle();
      setup();
    }else {
      numSquares = 6;
      toggle();
      setup();
    }
  });
}

for(i=0; i< squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];

  squares[i].addEventListener('click', function() {
    let clickedColor = this.style.backgroundColor;
    if(pickedColor === clickedColor) {
      for(i=0; i<numSquares; i++) {
        squares[i].style.backgroundColor = pickedColor;
        messageDisplay.textContent = "Good job!";
      }
    } else {
      this.style.backgroundColor = "rgba(0, 0, 0, 0)";
      messageDisplay.textContent = "Wrong Choice!";
    }
  });
};