let ex = true

if (ex) {
    console.log("first statement is true");
}

if (!ex) {
    console.log("second statement is true")
} else {
    console.log("second statement is false")
}


let input = prompt("Enter your Age please");
let age = Number(input);
console.log(age, typeof age);

let message;
if (age >= 21) {
    message = "You can enter and buy Alcohol"

} else if (age >= 19) {
    message = "You may enter but cant buy Alcohol"

} else {
    message = "You cant enter"
}
console.log(message)


/////


let iD = true;
let message1 = iD ? "valid" : "invalid";

console.log(message1)
///////
console.log("-----------------------------")

let randomNumber = Math.random();

randomNumber = randomNumber * 6;

floorNumber = Math.floor(randomNumber);

console.log(floorNumber)

let responseArray = ["eating", "sitting,", "drinking", "running", "sleeping", "riding a bicycle", "chilling", "learning"];

let question = prompt("Ask a question")

let numToStr = toString(floorNumber);


