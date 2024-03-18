let isMouseDown = false;
let color = "blue";

const sketch = document.querySelector(".sketch");
const resetButton = document.querySelector(".resetButton");
const slider = document.querySelector("#gridSize");
const colorPicker = document.querySelector("#colorPicker");


document.addEventListener("mousedown", () => {
    isMouseDown = true;
})

document.addEventListener("mouseup", () => {
    isMouseDown = false;
})

colorPicker.addEventListener("input", function () {
    color = colorPicker.value;
    console.log(colorPicker.value)
})

slider.addEventListener("input",  function () {
    let gridSize = slider.value;
    console.log(slider.value)
    createGrid(gridSize);
})


function createGrid(gridSize) {
    sketch.innerHTML = '';
    for (let i = 0; i <gridSize; i++) {
        const cell = document.createElement('div');
        cell.classList.add("cell");

        // if the user hovers and mousedown
        cell.addEventListener("mouseover", function () {
            if (isMouseDown) {
                cell.style.cssText = `background-color: ${color};`
            }
        })

        // if the user clicks
        cell.addEventListener("mousedown", function (e) {
            cell.style.cssText = `background-color: ${color};`
            console.log(e.target)
        })
        sketch.appendChild(cell)

        resetButton.addEventListener("click", function () {
            cell.style.cssText = "background-color: white;"
            cell.style.cssText = ""
        })
    }
}

createGrid(slider.value);





