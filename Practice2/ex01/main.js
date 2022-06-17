let newArray = [];

newArray.push("Milk", "Bread", "Apples");

console.log(newArray);


newArray.splice(1, 1, "Bananas", "Eggs");
console.log(newArray);

newArray.pop();
console.log(newArray);

newArray.sort();
console.log(newArray);

let findIndexOfMilk = newArray.indexOf("Milk");
console.log(findIndexOfMilk);

newArray.splice(1, 0, "Carrots", "Lettuce");
console.log(newArray);

let newArray2 = ["Juice", "Pop"];
console.log(newArray2);


let combinedList = [];
combinedList = newArray.concat(newArray2, newArray2);
console.log(combinedList);




