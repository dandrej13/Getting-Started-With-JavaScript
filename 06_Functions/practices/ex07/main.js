function calcFactorial(num) {
    console.log(num);
    if (num === 0) {
        return 1;
    } else {
        let result = num * calcFactorial(num - 1);
        console.log(result);
        return result;

    }
}
calcFactorial(10);

// fibb


let a = 0;
let b = 1;
let results;

let fibbonaciArray = [];

while (fibbonaciArray.length < 25) {
    fibbonaciArray.push(results);
    results = a + b;
    a = b;
    b = results;
}
console.log(fibbonaciArray);

let myArray = [];
let lesson = "Lesson"
let statusr;
let statusd;
for (let i = 1; i < 11; i++) {
    myArray.push(lesson + " " + i + " " + statusd)
    statusr = i % 2 === 0 ? statusd = true : satusd = false;
}


console.log(myArray);