const sketchpad = document.querySelector('.sketchpad');

for (let i = 0; i < 16 * 16 ; i++) {
    const div = document.createElement('div');
    div.classList.add('pixel');
    sketchpad.appendChild(div);
}