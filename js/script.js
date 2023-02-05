const sketchpad = document.querySelector('.sketchpad');
const setGrid = document.querySelector('#set-grid');

let gridSize = 16;

// Ask for the grid size
setGrid.addEventListener('click', e => {
    do {
        gridSize = +prompt('What numbers of squares do you want per grid? (Max 100)');
    } while (gridSize > 100 || gridSize <= 0);

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

    // Draw random colors
    const rainbow = document.querySelector('#rainbow');
    let rainbowActive = 1;

    rainbow.addEventListener('click', e => {
        if (rainbowActive) {
            rainbowActive = 0;
            e.target.textContent = 'Stop';
            drawRainbow(pixels);
        } else {
            rainbowActive = 1;
            e.target.textContent = 'Rainbow';
            draw(pixels);
        }
    });

    // Add shading
    const shading = document.querySelector('#shading');
    let shadingActive = 1;

    shading.addEventListener('click', e => {
        if (shadingActive) {
            shadingActive = 0;
            e.target.textContent = 'Stop';
            drawShading(pixels);
        } else {
            shadingActive = 1;
            e.target.textContent = 'Shading';
            draw(pixels);
        }
    });

    // Clean the sketchpad
    const cleanBtn = document.querySelector('#clean');

    cleanBtn.addEventListener('click', e => {
        clean(pixels);
    });
}

// Drawing functions
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

function drawShading(pixels) {
    
    pixels.forEach(pixel => {
        let shading = 255;

        pixel.addEventListener('mouseover', e => {
            shading -= (255 * 0.1);
    
            pixel.classList.add('pixel-hover');
            pixel.style.backgroundColor = `rgb(${shading}, ${shading}, ${shading})`;
        });
        
    });
}


function clean(pixels) {
    pixels.forEach(pixel => {
        
        pixel.style.backgroundColor = `white`;
        
    });
}

generateGrid();