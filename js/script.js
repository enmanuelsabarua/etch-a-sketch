const sketchpad = document.querySelector('.sketchpad');
const setGrid = document.querySelector('#set-grid');

let gridSize = 16;

// Ask for the grid size
setGrid.addEventListener('click', e => {
    do {
        gridSize = +prompt('What numbers of square do you want per grid?');
    } while (gridSize > 100);

    generateGrid();
});

// Create the grid
function generateGrid() {

    const oldPixels = document.querySelectorAll('.sketchpad > div');

    // Erase the old grid when selected a new one
    oldPixels.forEach(oldPixel => {
        oldPixel.remove();
    });
    
    // Create a grid with dynamic size
    for (let i = 0; i < gridSize * gridSize; i++) {
        const div = document.createElement('div');
        div.classList.add('pixel');
        div.style.flexBasis = `${550 / gridSize}px`;
        sketchpad.appendChild(div);
    }

    const pixels = document.querySelectorAll('.pixel');
    draw(pixels);

    // Erase or draw pixels
    const eraser = document.querySelector('#eraser');
    let drawOrErase = 1;

    eraser.addEventListener('click', e => {
        
        if (drawOrErase) {
            drawOrErase = 0;
            e.target.textContent = 'Draw';
            erase(pixels);
        } else {
            drawOrErase = 1;
            e.target.textContent = 'Eraser';
            draw(pixels);
        }

    });

    let rainbowActivate = 1;
    const rainbow = document.querySelector('#rainbow');

    rainbow.addEventListener('click', e => {
        if (rainbowActivate) {
            rainbowActivate = 0;
            e.target.textContent = 'Stop';
            drawRainbow(pixels);
        } else {
            rainbowActivate = 1;
            e.target.textContent = 'Rainbow';
            draw(pixels);
        }
    });
}

function draw(pixels) {
    pixels.forEach(pixel => {
        
        pixel.addEventListener('mouseover', e => {
            pixel.classList.add('pixel-hover');
            pixel.style.backgroundColor = document.querySelector('#select-color').value;
        });
        
    });
}

function erase(pixels) {
    pixels.forEach(pixel => {
            
        pixel.addEventListener('mouseover', e => {
            pixel.classList.add('pixel-hover');
            pixel.style.backgroundColor = 'white';
        });
        
    });
}

function drawRainbow(pixels) {
    pixels.forEach(pixel => {
        
        pixel.addEventListener('mouseover', e => {
            let randomColor1 = Math.floor(Math.random() * 255);
            let randomColor2 = Math.floor(Math.random() * 255);
            let randomColor3 = Math.floor(Math.random() * 255);

            pixel.classList.add('pixel-hover');
            pixel.style.backgroundColor = `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`;
        });
        
    });
}

generateGrid();