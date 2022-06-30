let valueOne = 10;
let valueTwo = 20;
let argumentOperator = "/";
let res;

function calculator(param1, param2, operator) {

    switch (operator) {
        case "+":
            return param1 + param2;
            break;
        case "-":
            return param1 - param2;
            break;
        case "*":
            return param1 * param2;
            break;
        case "/":
            return param1 / param2;
            break;
        default:
            break;
    }


}

console.log(calculator(valueOne, valueTwo, argumentOperator));
console.log(calculator(valueOne, valueTwo, "*"));


let arrowFunctionTwoValues = (param4, param3) => console.log(param4 + param3);
arrowFunctionTwoValues("bb", "aa    ")

let sayHello = (nameq) => console.log("Hello " + nameq + "!");
sayHello("Andrej")


let arrResults = [];

for (let i = 0; i < 10; i++) {
    let result = addTwoNumbers(i, 2 * i);
    arrResults.push(result);

}
console.log(arrResults)