

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    compliment(message, item) {
        return message + " " + item
    }
}

let mario = new Person("Mario", "Nikoloski");
console.log("Hello", mario.firstName, mario.lastName);

let stefan = new Person("Stefan", "Simonovski");
let first = stefan.compliment("wonderful", "hat");
console.log("Hello", stefan.firstName, stefan.lastName, "! You have a " + first);


