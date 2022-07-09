class Person {
    constructor(fName, lName) {
        this.firstName = fName;
        this.lastName = lName
    }

    fullname() {
        return this.firstName + " " + this.lastName
    }
};

let friendZero = new Person("Alek", "Kolarikj");
let friendOne = new Person("Dejan", "Bandev")
console.log(friendZero.fullname());
console.log(friendOne.fullname());

///////// I N H E R I T A N C E ////////////\

class Vehicle {
    constructor(color, currentSpeed, maxSpeed) {
        this.color = color;
        this.currentSpeed = currentSpeed;
        this.maxSpeed = maxSpeed;

    }

    move() {
        console.log("Moving at:", this.currentSpeed);
    }

    accelerate(amount) {
        this.currentSpeed += amount;
        console.log(this.currentSpeed);
    }
}

let firstVehicle = new Vehicle("black", 240, 270);
firstVehicle.move();

class Motorcycle extends Vehicle {
    constructor(color, currentSpeed, maxSpeed, fuel) {
        super(color, currentSpeed, maxSpeed)
        this.fuel = fuel
    }

    doWheelie() {
        console.log("One wheel");
    }
}

Motorcycle.prototype.stop = function () {
    this.currentSpeed = 0
}

let newMotor = new Motorcycle("red", 30, 150, "gasoline");

newMotor.move();
newMotor.accelerate(50)
newMotor.move();
newMotor.stop()
newMotor.move();



class Animal {
    constructor(type, weight, sound) {
        this.typeOfAnimal = type;
        this.weightOfAnimal = weight;
        this.soundOfAnimal = sound;
    }

    soundOf() {
        console.log("The animal: " + this.typeOfAnimal + " goes \"" + this.soundOfAnimal + "\"");
    }

}

Animal.prototype.mute = function () {
    this.soundOfAnimal = "mute"
}

let pig = new Animal("pig", "150kg", "oink");
pig.soundOf()
let mouse = new Animal("mouse", "2kg", "tcrt")
mouse.soundOf()
mouse.mute()
console.log(mouse);


class Human extends Animal {
    constructor(type, weight, sound, height, speed) {
        super(type, weight, sound);
        this.heightOfAnimal = height;
        this.speedOfAnimal = speed;
    }

    running() {
        console.log("mario runs at speed of : ", this.speedOfAnimal += 5);
    }
}

let mario = new Human("trafka", 100, "ouuuuu", 190, 6.5)
console.log(mario);
mario.running();



//////////////////////   GETTER   AND SETTER     \\\\\\\\\\\\\\\\\\\\\\\\\\\



class Persons {
    #firstName;
    #lastName;

    constructor(valueF, valueL) {
        this.#firstName = valueF;
        this.#lastName = valueL;
    };

    get fName() {
        return this.#firstName
    };

    set fName(setFirstName) {
        if (typeof setFirstName === "string") {
            this.#firstName = setFirstName;
        }
    };

    get lName() {
        return this.#lastName
    };

    set lName(setLastName) {
        if (typeof setLastName === "string") {
            this.#lastName = setLastName;
        }
    }

};
let andrej = new Persons("Andrej", "Dimitrievski");


console.log('get', andrej.fName);


andrej.fName = "mariosss"
console.log("set", andrej.fName);
console.log(andrej);
console.log("get", andrej.lName);
andrej.lName = "nikolskiii";
console.log("set", andrej.lName);
console.log(andrej);


