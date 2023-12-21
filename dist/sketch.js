function createBoard(size) {
    const board = document.querySelector("#board");

    board.style.display = "grid";
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        div.classList = "pixel";
        board.appendChild(div);
    }
}

function handlePixelClick(pixel) {
    if (isColor) {
        let maxVal = 0xFFFFFF; // 16777215
        let randomNumber = Math.random() * maxVal; 
        randomNumber = Math.floor(randomNumber);
        randomNumber = randomNumber.toString(16);
        let randColor = randomNumber.padStart(6, 0); 
        pixel.style.backgroundColor = `#${randColor}`;
    }
    else {
        pixel.style.backgroundColor = "black";
    }
}

createBoard(16);

let size = document.querySelector('#size');

let isBig = true;

size.addEventListener('click', () =>{
    if (isBig){
        createBoard(8);
        isBig = false;
        size.textContent = "Small"
    }
    else {
        createBoard(16);
        isBig = true;
        size.textContent = "Big"
    }
})

let isMouseDown = false;

document.addEventListener("mousedown", () => {
    isMouseDown = true;
});

document.addEventListener("mouseup", () => {
    isMouseDown = false;
});

let pixels = document.querySelectorAll(".pixel");

pixels.forEach(pixel => {
    pixel.addEventListener("mouseenter", () => {
        if (isMouseDown) {
            handlePixelClick(pixel);
        }
    });
});

let color = document.querySelector("#color");

let isColor = false;

color.addEventListener('click', () => {
    if(isColor){
        isColor = false;
        color.textContent = "RGB";
    }
    else {
        isColor = true;
        color.textContent = "Black";
    }
})

let reset = document.querySelector('#reset'); 

reset.addEventListener('click', () =>{
    pixels.forEach(pixel => {
        pixel.style.backgroundColor = 'white';  
    })
})

