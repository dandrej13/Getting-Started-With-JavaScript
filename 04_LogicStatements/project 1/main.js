let userInput = prompt("Insert a number");
userInput = Number(userInput);
let random = Math.floor(Math.random() * 100)
let message;
console.log(userInput, typeof userInput)
console.log(random, typeof random)
if (userInput < random) {
    message = "Your number: " + userInput + " is smaller than " + random;
} else if (userInput === random) {
    message = "Your number: " + userInput + " is equal to " + random
} else if (userInput > random) {
    message = "Your number: " + userInput + " is greater than " + random
} else {
    message = "You inserted an invalid number!"
}

console.log(message)