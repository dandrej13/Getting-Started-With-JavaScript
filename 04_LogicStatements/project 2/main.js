let userName = prompt("Enter your name: ");

let message;

switch (userName.toLowerCase()) {
    case "andrej":
    case "mario":
    case "ivan":
    case "dimitri":
    case "filip":
    case "stefan":
        message = "Hello friend!"
        break;

    default:
        message = "I don't know you!"
        break;
}

alert(message)