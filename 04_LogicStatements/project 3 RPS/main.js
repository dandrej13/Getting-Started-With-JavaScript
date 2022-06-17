let myArray = ["rock", "papper", "scissors"];
let random = Math.floor(Math.random() * 3);
let computer;


computer = myArray[random];

console.log(computer, random);




function challenge() {
    let choice = document.getElementById("userChoice").value;

    if (computer === myArray[0] && choice === "papper") {
        document.getElementById("message").innerHTML = "You win";
    } else if (computer === myArray[1] && choice === ("scissors")) {
        document.getElementById("message").innerHTML = "You win";
    } else if (computer === myArray[2] && choice === ("rock")) {
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
