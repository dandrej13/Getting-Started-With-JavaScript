let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];

let multiDimArray = [array1, array2, array3];

console.log(multiDimArray[2][0])


//exercise

let newarray1 = [1, 2, 3];

let multiArray = [newarray1, newarray1, newarray1];
console.log(multiArray[1][2]);


//d o double g

let dog = {
    dogName: "JavaScript",
    weigth: 2.4,
    color: "brown",
    breed: "chihuahua",
    age: 3,
    burglarBiter: true

};

let arrDog = [1, 2];

console.log(arrDog);
console.log(dog);

console.log(`My dog name is ${dog.dogName}, he weights ${dog.weigth}`);
dog.dogName = "Jecky";
console.log(dog);

//exerciseeeeeee

let myCar = {
    make: "Peugeot",
    model: "207",
    year: 2010,
    km: 95000,
    color: "metalic black",
    racingCar: false,
    // accelerate(kmh) {
    //     let acc = 10;
    //     return acc * kmh;
    // },
    speed(time) {
        let d = 100;
        return d / time;
    }
};
console.log(myCar);

let stringColor = "color";
myCar["color"] = "pink";

console.log(myCar);

let forSale = ["forSale"];
myCar[forSale] = true;


console.log(myCar);

console.log(myCar.make)
console.log(myCar.make)
console.log(myCar.forSale)


console.log(myCar.speed(0.7))


let message = ""
if (myCar.forSale) {
    message = "This car is for sale"
} else {
    message = "This car is not for sale"

}

myCar[message];///HOW TO INSERT PROPERTY INTO AN OBJECT PRASANJE??????

console.log(message)

/////////////


let company = {
    companyName: "Healthy Candy",
    activities: ["Food manufacturing", "improving kids", "manufacturing toys"],
    adress: {
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida"

    },
    yearOfEstablishment: 2021,
}

company.adress.zipcode = "33117";
company["adress"]["number"] = "100";

console.log(company)

let activity = company.activities[0];
console.log(activity)

/////////////

let people = {
    friends: [],

};

let first = {
    firstName: "Mario",
    secondName: "Nikoloski",
    id: 1,
};

let second = {
    firstName: "Mihajlo",
    secondName: "Ackovski",
    id: 2,

};
let third = {
    firstName: "Stefan",
    secondName: "Simonovski",
    id: 3,
};

people.friends.push(first, second, third);
console.log(people.friends);