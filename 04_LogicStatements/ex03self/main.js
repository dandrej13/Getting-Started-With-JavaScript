let num = Math.random();
num = num * 6;
floorNum = Math.floor(num);



let question = prompt("Ask a question");

let response = ["Good morning", "Good afternoon", "Good evening", "Goodbye", "See you next time", "Thank you!"];
console.log(floorNum);
let message;

//response with an array
// switch (floorNum) {
//     case 0:
//         message = response[0]
//         break;

//     case 1:
//         message = response[1]
//         break;

//     case 2:
//         message = response[2]
//         break;

//     case 3:
//         message = response[3]
//         break;

//     case 4:
//         message = response[4]
//         break;

//     case 5:
//         message = response[5]
//         break;
// // }

switch (floorNum) {
    case 0:
        message = "Good morning"
        break;

    case 1:
        message = "Good afternoon"
        break;

    case 2:
        message = "Good evening"
        break;

    case 3:
        message = "Goodbye"
        break;

    case 4:
        message = "See you next time"
        break;

    case 5:
        message = "Thank you!"
        break;
}


console.log(question);
console.log(message)


let inputGrade = prompt("Which grade did you get");
let result;
switch (inputGrade) {
    case "F":
    case "D":
    case "f":
    case "d":

        result = "Try again"
        break;

    case "c":
    case "C":
    case "B":
    case "b":

        result = "Congratulations"
        break;

    case "A":
    case "a":

        result = "Nice!"
        break;

    default:
        result = "Thats not a grade"
        break;

}

console.log(result)