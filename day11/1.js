const size = 300;
const gridSerialNumber = 7803;
let grid = new Array(size);

function calculatePowerLevel(x, y) {
    const rackId = x + 10;
    let powerLevel = rackId * y;
    powerLevel += gridSerialNumber;
    powerLevel *= rackId;
    powerLevel = parseInt(powerLevel.toString().slice(-3));
    powerLevel -= 5;
    return powerLevel;
}

function generateGrid(grid) {
    for (let y = 0; y < size; y++) {
        grid[y] = []
        for (let x = 0; x < size; x++) {
            grid[y].push(calculatePowerLevel(x, y));
        }
    }
    return grid;
}

function getSubGrid(x, y, size, grid) {
    let subGrid1 = [];
    let subGrid2 = [];
    for (let j = y; j < y + size; j++) {
        subGrid1.push(grid[j]);
    }
    for (let i = 0; i < size; i++) {
        // console.log(subGrid1[i].slice(x,x+size))
        subGrid2.push(subGrid1[i].slice(x, x + size));
        // subGrid[i].push(grid[i + y].slice(x, x + size));
    }
    return subGrid2;
}

function sumPowerLevels(x, y, subGrid) {
    let sum = 0;
    let concatGrid = subGrid.reduce((a, b) => {
        return a.concat(b);
    }, []);
    sum = concatGrid.reduce((a, b) => {
        return a + b
    }, 0);
    return sum;
}


grid = generateGrid(grid);

let largest = {
    x: -1,
    y: -1,
    totalPower: 0
}
for (let squareSize = 1; squareSize <= size; squareSize++) {
    console.log(squareSize);
    for (let i = 0; i < size - squareSize; i++) {
        for (let j = 0; j < size - squareSize; j++) {
            let subgrid = getSubGrid(i, j, squareSize, grid);
            let totalPower = sumPowerLevels(i, j, subgrid);
            if (totalPower > largest.totalPower) {
                largest.x = j;
                largest.y = i;
                largest.totalPower = totalPower;
                console.log(`size: ${squareSize}, coordinates: ${j},${i}, power: ${totalPower}`);
            }
        }
    }
}


console.log(largest);