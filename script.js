let isMouseDown = false;
let color = 'blue';

const sketch = document.querySelector('.sketch');
const resetButton = document.querySelector('.resetButton');
const slider = document.querySelector('#gridSize');
const colorPicker = document.querySelector('#colorPicker');

document.addEventListener('mousedown', () => {
  isMouseDown = true;
});

document.addEventListener('mouseup', () => {
  isMouseDown = false;
});

colorPicker.addEventListener('input', () => {
  color = colorPicker.value;
});

function createGrid(gridSize) {
  sketch.textContent = '';
  for (let i = 0; i < gridSize; i += 1) {
    const cell = document.createElement('div');
    cell.classList.add('cell');

    // if the user hovers and mousedown
    cell.addEventListener('mouseover', () => {
      if (isMouseDown) {
        cell.style.cssText = `background-color: ${color};`;
      }
    });

    // if the user clicks
    cell.addEventListener('mousedown', () => {
      cell.style.cssText = `background-color: ${color};`;
    });
    sketch.appendChild(cell);

    resetButton.addEventListener('click', () => {
      cell.style.cssText = 'background-color: white;';
      cell.style.cssText = '';
    });
  }
}

slider.addEventListener('input', () => {
  const gridSize = slider.value;
  createGrid(gridSize);
});

createGrid(slider.value);
