class Dog {
    constructor(param1, param2, param3, param4) {
        this.dogName = param1;
        this.weight = param2;
        this.color = param3;
        this.breed = param4;
    }

    dogDescription() {
        console.log("Name of the dog is:", this.dogName, "Weight:",
            this.weight, "Breed: ", this.breed);
    }
};




let dog = new Dog("JavaScript", 2.4, "brown", "chihuahua");
dog.dogDescription();
