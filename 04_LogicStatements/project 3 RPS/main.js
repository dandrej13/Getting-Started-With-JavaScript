let myArray = ["rock", "papper", "scissors"];
let random = Math.floor(Math.random() * 3);
let computer;
// switch (random) {
//     case 0:
//         computer = myArray[0];
//         break;
//     case 1:
//         computer = myArray[1];
//         break;
//     case 2:
//         computer = myArray[2];
//         break;

// }
computer = myArray[random];
console.log(computer, random);




function challenge() {
    let choice = document.getElementById("userChoice").value;


    if (computer === [0], choice === ("papper")) {
        document.getElementById("message").innerHTML = "You win";
    } else if (computer === [1], choice === ("scissors")) {
        document.getElementById("message").innerHTML = "You win";
    } else if (computer === [2], choice === ("rock")) {
        document.getElementById("message").innerHTML = "You win";
    }
    else {
        document.getElementById("message").innerHTML = "You lose";
    }
    if (computer === choice) {
        document.getElementById("message").innerHTML = "It's a tie!";
    }



    console.log(choice);
}
