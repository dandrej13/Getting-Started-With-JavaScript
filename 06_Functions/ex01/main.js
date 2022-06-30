let myArray = ["smart", "harsimatic", "intuitive", "desicive"];
let ranNum = Math.floor(Math.random() * 4);
function describe() {

    let input = prompt("What's your name?");
    let result = myArray[ranNum];
    console.log(input + " you are very " + result);
}

describe();
