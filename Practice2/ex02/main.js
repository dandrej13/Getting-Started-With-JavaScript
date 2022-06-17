let myArray = [1, 2, 3];
let myNewArray = [myArray, myArray, myArray];

console.log(myNewArray[1][2]);


let myCar = {
    make: "Peugeot",
    model: "207",
    year: 2010,
    used: true,
    color: "Red",
    forSale: true
};


let myCar2 = {
    make: "Mercedes",
    model: "A5",
    year: 2010,
    used: true,
    color: "Red",
    forSale: false
};
console.log(myCar);

if (myCar.forSale) {
    console.log(myCar.make, " - ", myCar.model);
}

if (myCar2.forSale) {
    console.log(myCar2.make, " - ", myCar2.model);
} else {
    console.log(myCar2.make, " - ", myCar2.model, " is not for sale");
}


let insert = prompt("Enter your age!");
let toNM = Number(insert);
console.log(typeof toNM)

let age = insert < 18 ? console.log("You are not allowed to enter!") : console.log("Welcome!");;

