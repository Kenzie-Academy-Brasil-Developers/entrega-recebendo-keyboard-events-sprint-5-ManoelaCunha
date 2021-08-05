let boxTop = 550;
let boxLeft = 630;

const img = document.getElementById("box");
const imgHelicoptero = document.createElement("img");
imgHelicoptero.src = "img/helicoptero_right.png";
img.appendChild(imgHelicoptero);

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    console.log(keyName);
    keydownListener(keyName);
});

const keydownListener = (value) => {

    if(value === 'ArrowDown'){
        boxTop += 10;
    }

    if(value === 'ArrowUp'){
        boxTop -= 10;
    }
    
    if(value === 'ArrowRight'){
        boxLeft += 10;
        imgHelicoptero.src = "img/helicoptero_right.png";
    }

    if(value === 'ArrowLeft'){
        boxLeft -= 10;
        imgHelicoptero.src = "img/helicoptero_left.png";
    }

    document.getElementById("box").style.top = boxTop + "px";
    document.getElementById("box").style.left = boxLeft + "px";
};
