

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let mario = new Person("Mario", "Nikoloski");
console.log("Hello", mario.firstName, mario.lastName);

let stefan = new Person("Stefan", "Simonovski");
console.log("Hello", stefan.firstName, stefan.lastName);
