const container = document.querySelector(".container");
const resetBtn = document.querySelector(".new-grid-btn");
const clearBtn = document.querySelector(".reset-grid-btn");
const rainbowSwitch = document.querySelector(".rainbow-toggle");

const DEFAULT_SIZE = 4;
const DEFAULT_COLOR = "#212f3d";

let side = DEFAULT_SIZE;
let colorMode = DEFAULT_COLOR;

// Generate random color value to be added into CSS
function rainbow() {
    return `rgb(${Math.random()*255|0},${Math.random()*255|0},${Math.random()*255|0})`;
}

// Clears old grid and creates new grid
function createGrid(number) {
    container.innerHTML = "";
    for (let i = 0; i < number; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-box");
        div.style.width = 100 / side + "%";
        container.appendChild(div);
    }
}

// Reset (make new grid) button event listener
resetBtn.addEventListener("click", () => {
    side = prompt("Please state desired grid size.");
    if (side === null || side === "0" || side === "") {return;}
    if (side > 100) {
        alert("Too big! Please choose a smaller size.");
        return;
    }
    createGrid(side * side);     
})

// Rainbow toggle event listener
rainbowSwitch.addEventListener("change", (e) => {
    colorMode = rainbowSwitch.checked ? "rainbow" : DEFAULT_COLOR
  });

// Clear button event listener
clearBtn.addEventListener("click", () => {
    createGrid(side * side);
})

// Main mouse-over event listener
container.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("grid-box")) {
        e.target.style.backgroundColor = (colorMode == "rainbow") ? rainbow() : colorMode;
    }
})

// Main "loop"
createGrid(DEFAULT_SIZE * DEFAULT_SIZE);