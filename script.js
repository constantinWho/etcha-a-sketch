const gridContainer = document.querySelector("#container")

function randomColor() {
   return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
}

function gridStart(gridSize) {
    while (gridContainer.firstChild) gridContainer.firstChild.remove()

    for (let i = 0, grids = gridSize ** 2; i < grids; i++) {
        const gridElement = document.createElement("div")
        gridElement.classList.add('grid')
        gridElement.style.height = `${100/gridSize}%`
        gridElement.style.width = `${100/gridSize}%`
        gridContainer.appendChild(gridElement)
        gridElement.addEventListener("mouseover", event => {
            event.target.style.background = randomColor()
        })
    }
}

function changeSize() {
    const min = 1, max = 64
    let newSize = prompt(`Type a number between ${min} - ${max}`)
    if (newSize) {
        if (newSize >= min && newSize <= max) {
            gridStart(newSize)
        } else {
            alert("wrong number")
            changeSize()
        }
    }
}

window.addEventListener('load', () => {
    gridStart(16)
})