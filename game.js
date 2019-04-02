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
  for(i=0; i<squares.length; i++) {
   squares[i].style.backgroundColor = colors[i];
  }
}

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
      setup();
      for(i=3; i<6; i++) {
        squares[i].style.backgroundColor = "darkgrey"
      }
    }else {
      numSquares = 6;
      setup();
    }
  });
}

for(i=0; i<= squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];

  squares[i].addEventListener('click', function() {
    let clickedColor = this.style.backgroundColor;
    if(pickedColor === clickedColor) {
      squares.forEach(square => {
        square.style.backgroundColor = pickedColor;
        messageDisplay.textContent = "You are good at guessing!";
      })
    } else {
      this.style.backgroundColor = "darkgrey";
      messageDisplay.textContent = "Wrong Choice!";
    }
  });
};