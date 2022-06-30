let emptyArr = [];

function sumOfTwoNumbers(num1, num2) {
    return num1 + num2
};

for (let i = 0; i < 10; i++) {
    let result = sumOfTwoNumbers(i * 5, i * i);
    emptyArr.push(result)
};



console.log(emptyArr);

///////////////////////////////////////////////////////////////

let secondEmptyArray = [];

function sobiranje(br1, br2) {
    return br1 + br2

};

for (let j = 0; j < 10; j + 2) {
    let rezultat = sobiranje(j * j, j * 35);
    secondEmptyArray.push(rezultat)

};

console.log(secondEmptyArray);
