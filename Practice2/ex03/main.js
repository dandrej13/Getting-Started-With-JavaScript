let age = prompt("Enter your age please");
let ageToNum = Number(age);
let enterance;
let sTatus;

if (age >= 24 && age <= 45) {
    sTatus = prompt("You are allowed to enter. Please insert your status. (\"Single\" / \"Taken\")")
    if (sTatus === "Single") {
        enterance = alert("Entrance costs $15 and you get a blue braclet! Have fun!");
    } else {
        enterance = alert("Enterance costs $30 and you get a red braclet!");
    }
} else if (age >= 18 && age < 24) {
    sTatus = prompt("You are allowed to enter. Please insert your status. (\"Single\" / \"Taken\")")
    if (sTatus === "Single") {
        enterance = alert("Entrance costs $6 and you get a gold braclet! Have fun");
    } else {
        enterance = alert("Enterance costs $14 and you get a silver braclet!");
    }
} else if (age < 18) {
    enterance = alert("You are not allowed inside!");
} else if (age > 45) {
    enterance = alert("You are not allowed inside!");
} else {
    enterance = alert("Enter a valid number")
}
