const container = document.querySelector(".container");
const resetBtn = document.querySelector(".new-grid-btn");
const clearBtn = document.querySelector(".reset-grid-btn");
const rainbowSwitch = document.querySelector(".rainbow-toggle");

let side = 4;

// generate random color value to be added into CSS
function randomColorValue() {
    let color = [];
    color.push(Math.floor(Math.random()*255));
    color.push(Math.floor(Math.random()*255));
    color.push(Math.floor(Math.random()*255));
    return `background-color: rgb(${color[0]},${color[1]},${color[2]});`
}

// make gray
function setGrayMode() {
    let boxes = document.querySelectorAll(".grid-box");
    boxes.forEach(e => {
        e.addEventListener("mouseenter", () => {
            console.log(e.style.cssText);
            e.style.cssText = e.style.cssText + "background-color:gray;";
            e.setAttribute("class","grid-box")
        })
    })
}

// make rainbow
function setRainbowMode() {
    let boxes = document.querySelectorAll(".grid-box");
    boxes.forEach(e => {
        e.addEventListener("mouseenter", () => {
            e.setAttribute("class","grid-box")
            e.style.cssText = e.style.cssText + randomColorValue();
        })
    })
}

// clear grid
clearBtn.addEventListener("click", () => {
    document.querySelectorAll(".grid-box").forEach(e => {
        let boxes = document.querySelectorAll(".grid-box");
        boxes.forEach(e => {
            e.style.cssText = e.style.cssText + "background-color:transparent;";
        })
    })
})

// function to create new grid
function createGrid(number) {
    for (let i = 0; i < number; i++) {
        const div = document.createElement("div");
        div.setAttribute("class","grid-box");
        div.style.width = 100 / side + "%";
        container.appendChild(div);
    }
}

// create new grid
resetBtn.addEventListener("click", () => {
    side = prompt("How many squares in your grid? (x by x)");
    if (side === null || side === "0" || side === "") {return;}
    else {
        side = parseInt(side);
        if (side > 50) {
            alert("Too big! Please choose a smaller size.")
        }
        else {
            console.log(side);
            document.querySelectorAll(".grid-box").forEach(e => e.remove());
            createGrid(side * side);
            rainbowSwitch.checked ? setRainbowMode(): setGrayMode();
        }
    }
})

// toggle rainbow mode switch
rainbowSwitch.addEventListener("change", (e) => {
    if (rainbowSwitch.checked) {
        setRainbowMode();           
    } else {
        setGrayMode();
    }
  });

createGrid(16);
setGrayMode();
