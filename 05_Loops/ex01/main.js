let maxValue = 10;
let ranNum = Math.floor(Math.random() * (maxValue + 1));
let rightNumber = false;


while (!rightNumber) {
    let userNumber = prompt("Insert your guessed number between 0 and " + maxValue);
    userNumber = Number(userNumber);

    if (userNumber === ranNum) {
        alert("You have guessed right!");
        rightNumber = true;
    } else if (userNumber < ranNum) {
        alert("You guessed lower. Try Again");
    } else {
        alert("You guessed higher. Try again");
    }
}

