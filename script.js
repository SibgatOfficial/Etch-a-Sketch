let container = document.querySelector(".container");
let i, j;
let p = 16;
let style = 1;
function changeGrid() {
  p = prompt("Enter the grid size upto 100", 16);
  if (p > 100) {
    return;
  }
  container.innerHTML = "";
  createPixel();
}
createPixel();
function createPixel() {
  for (i = 0; i < p; i++) {
    for (j = 0; j < p; j++) {
      let pixel = document.createElement("div");
      pixel.setAttribute("class", "pixel");
      container.appendChild(pixel);
      pixel.style.width = window.innerWidth / p + "px";
      pixel.style.height = window.innerWidth / p + "px";
      let a = 1;
      pixel.onmouseover = () => {
        if (style == 1) {
          pixel.style.background = "black";
        }
        if (style == 2) {
          pixel.style.background = `rgb(
          ${Math.floor(Math.random() * 255)},
          ${Math.floor(Math.random() * 255)},
          ${Math.floor(Math.random() * 255)}
        )`;
        }
        if (style == 3) {
          pixel.style.background = "black";
          pixel.style.opacity = 0.1 * a;
          a++;
        }
      };
    }
  }
}

function chooseOption() {
  let select = document.querySelector(".option");
  if (select.value == "Default") {
    style = 1;
  }
  if (select.value == "colourful") {
    style = 2;
  }
  if (select.value == "black") {
    style = 3;
  }
}
