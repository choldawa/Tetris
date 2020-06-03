const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

// Calculate size of canvas from constants.
ctx.canvas.width = cols * block_size;
ctx.canvas.height = rows * block_size;

// Scale blocks
ctx.scale(block_size, block_size);


let board = new Board();

function play() {
    board = getEmptyBoard();
    let piece = new Piece(ctx);
    piece.draw();
    
    board.piece = piece;
  }