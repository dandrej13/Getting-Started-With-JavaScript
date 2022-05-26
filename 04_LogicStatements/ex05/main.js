let prize = prompt('Enter a number from 0 to 10')

prize = Number(prize);

let message = "My selection: "

console.log(prize, typeof prize)

switch (prize) {
    case 0:
    case 1:
        message = message + "Car"
        break;
    case 2:
    case 3:
        message = message + "Money"
        break;

    case 4:
    case 5:
    case 6:
    case 7:
        message = "No prize. Better luck next time"
        break;
    case 8:
    case 9:
        message = message + "Ticket"
        break;
    case 10:
        message = message + "House"
        break;
    default:
        message = "That's an invalid input"
        break;
}

console.log(prize, typeof prize, message)




// function betting() {
//     let bet = document.getElementById("bet").value;
//     let randomNumber = Math.floor(Math.random() * 10);
//     let message;

//     switch (randomNumber) {
//         case 6:
//             message = "You won: " + bet * 4.55
//             break;
//         case 8:
//         case 10:
//             message = "You won: " + bet * 2.45
//             break;
//         default:
//             message = "You lost!"
//             break;
//     }
//     document.getElementById("message").innerHTML = message;
//     console.log(randomNumber)
// }


function kladenje() {
    let vlog = document.getElementById("vlog").value;
    let izvlecenBroj = Math.floor(Math.random() * 10);
    let ishod;

    switch (izvlecenBroj) {
        case 1:
        case 7:
        case 9:
            ishod = "Освоивте: " + vlog * 2.5
            break;

        default:
            ishod = "Повеќе среќа следен пат!"
            break;
    }

    document.getElementById("ishod").innerHTML = "Извлековте : " + izvlecenBroj + ".  " + ishod;

}
