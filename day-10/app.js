const fs = require('fs');
const Point = require('./point');

function initializeBoard(board) {
    for(let i = 0; i < 22; i++) {
        board[i] = [];
        for(let j = 0; j < 15; j++) {
            board[i][j] = '.';
        }
    }
    return board;
}

function resetBoard(data, board) {
    data.forEach(point => {
        if(point.x >= 0 && point.x < 22 && point.y >= 0 && point.y < 15) {
            board[point.x][point.y] = '.';
        }
    });
    return board;
}

function mapDataToBoard(data, board) {
    data.forEach(point => {
        if(point.x >= 0 && point.x < 22 && point.y >= 0 && point.y < 15) {
            board[point.x][point.y] = '#';
        }
    });
    return board;
}

function printBoard(board) {
    console.log(board);
}

function nextSecond(data) {
    data.forEach(point => {
        point.move();
    })
    return data;
}

let stdinBuffer = fs.readFileSync(0).toString();
const input = stdinBuffer.split("\n");

data = input.map(point => {
    const x = parseInt(point.substring(point.indexOf('<') + 1, point.indexOf(',')));
    const y = parseInt(point.substring(point.indexOf(',') + 1, point.indexOf('>')));

    const xVel = parseInt(point.substring(point.lastIndexOf('<') + 1, point.lastIndexOf(',')));
    const yVel = parseInt(point.substring(point.lastIndexOf(',') + 1, point.lastIndexOf('>')));

    const dataPoint = new Point(x, y, xVel, yVel);
    return dataPoint;
})

let board = initializeBoard([]);
board = mapDataToBoard(board, data);
printBoard(board);

data = nextSecond(data);
board = mapDataToBoard(board, data);
printBoard(board);


data = nextSecond(data);
board = mapDataToBoard(board, data);
printBoard(board);


data = nextSecond(data);
board = mapDataToBoard(board, data);
printBoard(board);
