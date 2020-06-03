class Board {
    grid;

    // Reset the board when we start a new game.
    reset() {
        this.grid = this.getEmptyBoard();
    }

    // Get matrix filled with zeros.
    getEmptyBoard() {
        return Array.from(
            { length: rows }, () => Array(cols).fill(0)
        );
    }
}