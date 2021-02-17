const gridContainer = document.querySelector("#container");

gridStart(16);

let randomColor = () => {
    let colorsList = ["rgb(54, 100, 248)",
                    "rgb(250, 97, 69)",
                    "rgb(56, 247, 230)",
                    "rgb(44, 176, 204)",
                    "rgb(27, 23, 78)",
                    "rgb(137, 143, 17)reen",
                    "rgb(164, 48, 82)",
                    "rgb(137, 104, 173)",
                    "rgb(17, 122, 170)",
                    "rgb(141, 152, 170)",
                    "rgb(159, 3, 1)"]
    randomNum = Math.floor(Math.random()*colorsList.length);
    result = colorsList[randomNum];
    return result;
}

function gridStart(gridSize) {
    let grids = gridSize**2;
    for (let i=0; i<(grids); i++) {
        const gridElement = document.createElement("div");
        gridElement.classList.add('grid');
        gridElement.style.height = (400/gridSize-2)+"px";
        gridElement.style.width = (400/gridSize-2)+"px";
        gridContainer.appendChild(gridElement);
    
        function changeColor() {
            gridElement.style.background = randomColor();
        }
        gridElement.addEventListener("mouseover", changeColor);
    }
}

function changeSize() {
    let newSize = prompt("Type a number between 1-64");
    gridContainer.innerHTML="";
    if ( newSize<=0 || newSize >64) {
        alert("wrong number");
        changeSize();
    } else {
        gridStart(newSize);
    }
}




