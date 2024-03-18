const sketch = document.querySelector(".sketch");
const resetButton = document.querySelector(".resetButton");
let isMouseDown = false;
let color = "blue";

document.addEventListener("mousedown", () => {
    isMouseDown = true;
})

document.addEventListener("mouseup", () => {
    isMouseDown = false;
})


for (let i = 0; i <16; i++) {
    for (let j = 0; j < 180; j++) {
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




