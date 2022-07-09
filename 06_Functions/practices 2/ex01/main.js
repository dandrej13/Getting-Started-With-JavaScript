function logName() {
    console.log("Andrej");

};

function logNameWithParams(ime) {
    console.log("stefan");
};




const minToHour = 60;

function firstOne(minutes) {
    let result = minutes / minToHour;
    return Math.floor(result)
};

console.log(firstOne(240));

///////



let minutes = 390;

function minutesToHours(min) {
    let results = min / 60;
    let hours = Math.floor(results)
    const decimalToStr = results.toString().split('.')[1];
    let minutes = Number(decimalToStr) * 6;
    return `${hours} : ${minutes}`
}

console.log(minutesToHours(minutes));


////////////////////////

let arrOfCountries = ["Australia", "Germany", "United States of America"];


function longestCountryName(arr) {
    let longName = "";
    if (typeof arr === "object" && arr.lenght > 0) {
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            if (longName === "") {
                longName = element;
            } else if (longName.length < element.length) {
                longName = element;
            }
        }

        return longName;

    } else {
        return longName;

    }


}

let longestName = longestCountryName(arrOfCountries);

//////////////

let a = 12;
let b = 10;
let operator = "+";

function basicCalc(param1, param2, param3) {
    if (param3 === "*") {
        let result = param1 * param2
        console.log("result: ", result);
        let message = `the operation is multiplicaton. The result is ${result}`
        console.log(message);
        console.log("the operation is multiplicaton ", param1 + " * ", + param2, " = ", + param1 * param2);
    } else if (param3 === "+") {
        let result = param1 + param2;
        console.log(result);
        let message = `the operation is addition. The result is ${result}`
        console.log(message);
    } else if (param3 === "-") {
        let result = param1 - param2;
        console.log(result);
        let message = `the operation is subtraction. The result is ${result}`
        console.log(message);
    }
}

basicCalc(a, b, operator);
basicCalc(a, b, "-");


////////////////////////////////


function getRecursive(params) {
    if (params === 0) {
        getRecursive(params * getRecursive(params - 1));
        console.log(params);

    }
}

getRecursive(5);



function secondRecursion(nr) {
    console.log("Started fucntion:" + nr);
    if (nr > 0) {
        secondRecursion(nr - 1);
    } else {
        console.log("done with recursion");
    }
    console.log("Ended function: " + nr);
}

secondRecursion(6)


/////
var exponent = function (a, n) {
    if (n === 0) {
        return 1;
    }
    else {
        return a * exponent(a, n - 1);
    }
};

console.log(exponent(4, 2));