'use strict';

let board = {
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: 'O',
  8: '8',
  9: '9',
};

const placeStone = (loc, turn) => {
  board[loc] = mark;
}

const printBoard = () => {
  console.log(`\n${board[1]} | ${board[2]} | ${board[3]}\n---------\n${board[4]} | ${board[5]} | ${board[6]}\n---------\n${board[7]} | ${board[8]} | ${board[9]}\n`);
};

const isRightPlace = (loc) => {
  return typeof board[loc] === 'number';
}

printBoard();

console.log(isRightPlace(7));