var Board = function () {
  return [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
}

var board = Board();

var marks = {
  player1: 1,
  player2: 2
};

var gameOn = true;

function move (coordinate, player) {
  var mark = marks[player];
  board[3 - coordinate.Y][coordinate.X] = mark;
  checkWinner(board, player);
};

function checkWinner(board, player) {
  var mark = marks.player;
  for (var i = 0; i < 3; i++) {
    if (board[0][i] === mark && board[1][i] === mark && board[2][i] === mark) {
      declareWinner(player);
    } //goes through top row checking down for vertical wins
  }
  for (var j = 0; j < 3; j++) {
    if (board[i][0] === mark && board[i][1] === mark && board[i][2] === mark) {
      declareWinner(player);
    }
  }
  if (board[1][1] === mark) {
    if (board[0][0] === mark && board[2][2] === mark) {
      declareWinner(player);
    } else if (board[0][2] === mark && board[2][0] === mark) {
      declareWinner(player);
    }
  }
};

function declareWinner(player) {
  console.log(player, ' WINS!');
  gameOn = !gameOn;
  board = Board();
};

function renderBoard() {
  for (var k = 0; k < 3; k++) {
    console.log(board[k]);
  }
}

while (gameOn) {
  renderBoard(board);
}