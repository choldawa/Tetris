// board dimensions and scaling
const cols = 10;
const rows = 20;
const block_size = 30;

// block colors and shapes

// points

// levels

// pressed keys
const KEY = {
    LEFT: 37,
    RIGHT: 39,
    DOWN: 40
  }

  document.addEventListener('keydown', event => {
    if (moves[event.keyCode]) {  
      // Stop the event from bubbling.
      event.preventDefault();
      
      // Get new state of piece
      let p = moves[event.keyCode](board.block);
      
      if (board.valid(p)) {    
        // If the move is valid, move the piece.
        board.block.move(p);
        
        // Clear old position before drawing.
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
        
        board.block.draw();
      }
    }
  })

