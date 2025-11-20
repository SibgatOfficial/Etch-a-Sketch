let container = document.querySelector(".container");
let i, j;
let p = 16;
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
      pixel.onmouseover = () => {
        pixel.style.background = `rgb(
  ${Math.floor(Math.random() * 255)},
  ${Math.floor(Math.random() * 255)},
  ${Math.floor(Math.random() * 255)}
)`;
      };
    }
  }
}
