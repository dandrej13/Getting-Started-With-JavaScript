let myTable = [];

let numOfRows = prompt("Enter number of rows");
numOfRows = Number(numOfRows);
let numOfColumns = prompt("Enter number of columns");
numOfColumns = Number(numOfColumns);
for (let row = 0; row < numOfRows; row++) {
    myTable.push([]);
    for (let col = 0; col < numOfColumns; col++) {
        myTable[row].push(`Row ${row} Col ${col}`)
    }
}

console.table(myTable);