const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

// Calculate size of canvas from constants.
ctx.canvas.width = cols * block_size;
ctx.canvas.height = rows * block_size;

// Scale blocks
ctx.scale(block_size, block_size);


let board = new Board();

function play() {
  board = board.getEmptyBoard();
  let block = new Block(ctx);
  block.draw();

  board.block = block;
}

moves = {
  [KEY.LEFT]: p => ({ ...p, x: p.x - 1 }),
  [KEY.RIGHT]: p => ({ ...p, x: p.x + 1 }),
  [KEY.UP]: p => ({ ...p, y: p.y + 1 })
};

const KEY = {  
  SPACE: 32,
  // ...
}

moves = {  
  [KEY.SPACE]: p => ({ ...p, y: p.y + 1 })
  // ...
};

// In EventListener
if (event.keyCode === KEY.SPACE) {
  // Hard drop
  while (board.valid(p)) {
    board.piece.move(p);   
    p = moves[KEY.DOWN](board.piece);
  }
}