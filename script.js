function createGrid(grid, size){
    for (let row=0;row<size;row++){
        let newRow = document.createElement("div");
        newRow.classList.add("row");
        for (let column=0;column<size;column++){
            let newSquare = document.createElement("div");
            newSquare.classList.add("square");
            newSquare.addEventListener("mouseover", (event) => {
                event.target.style.backgroundColor = "black";
            });
            newSquare.addEventListener("mousedown", (event) => {
                event.target.style.backgroundColor = "white";
            });
            newRow.appendChild(newSquare);
        }
        grid.appendChild(newRow);
    }
}

function deleteGrid(grid){
    while (grid.firstChild){
        grid.removeChild(grid.lastChild);
    }
}

function newGrid(size){
    const grid = document.querySelector(".grid");
    if (grid.firstChild){
        deleteGrid(grid);
    }
    createGrid(grid,size);
}

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    let size = parseInt(prompt("Enter new amount of squares per side"));
    if (typeof(size) != "number" || size < 0){
        alert("Input only positive numbers");
        size = 1;
    }
    size = size > 100 ? 100 : size;
    newGrid(size);
});


newGrid(16);