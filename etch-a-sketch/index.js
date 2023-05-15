document.addEventListener("DOMContentLoaded", function(){
    console.log("Hello")
    createBoard(32);
    
})

function createBoard(size) {
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`
}

// 