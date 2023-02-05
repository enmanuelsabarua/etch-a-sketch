const sketchpad = document.querySelector('.sketchpad');
const setGrid = document.querySelector('#set-grid');

let gridSize = 16;

setGrid.addEventListener('click', e => {
    do {
        gridSize = +prompt('What numbers of square do you want per grid?');
    } while (gridSize > 100);
    
    generateGrid();
});

function generateGrid() {

    const oldPixels = document.querySelectorAll('.sketchpad > div');

    oldPixels.forEach(oldPixel => {
        oldPixel.remove();
    });
    
    for (let i = 0; i < gridSize * gridSize; i++) {
        const div = document.createElement('div');
        div.classList.add('pixel');
        div.style.flexBasis = `${550 / gridSize}px`;
        sketchpad.appendChild(div);
    }

    const pixels = document.querySelectorAll('.pixel');
    
    pixels.forEach(pixel => {
        
        pixel.addEventListener('mouseover', e => {
            pixel.classList.add('pixel-hover');
            pixel.style.backgroundColor = document.querySelector('#select-color').value;
        });
        
    });
}

generateGrid();