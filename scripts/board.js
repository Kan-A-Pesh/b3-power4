class Board {
  constructor() {
    this.board = [];
    this.currentPlayer = 1;

    // Generate dom
    this.boardContainer = document.createElement("div");
    this.boardContainer.classList.add("board");
    document.body.appendChild(this.boardContainer);

    // Generate rows
    for (let i = 0; i < 7; i++) {
      const row = document.createElement("div");
      row.classList.add("row");
      this.boardContainer.appendChild(row);
      this.board.push({
        element: row,
        cells: [],
      });

      // Generate cells
      for (let j = 0; j < 6; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        row.appendChild(cell);
        this.board[i].cells.push(cell);
      }
    }
  }

  tryAddPiece(col) {
    const row = this.board[col].cells.find((cell) => cell.value === null);
    if (row) {
      row.value = this.currentPlayer;
      this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
    }
  }
}

const board = new Board();
