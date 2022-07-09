const inchToCM = 2.54;
const kgToP = 2.2046;
console.log(`1 inch eqauls to ${1 * inchToCM} cm`);
console.log(`${1 * kgToP} pounds is equal to 1 kilo`);

let myH = prompt("height");
let myW = prompt("weight");

let BMI = (myW / (myH ** 2));
console.log(BMI) 
