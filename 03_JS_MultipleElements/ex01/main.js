console.log("test")

let arr = ["hi there", 5, true];
console.log(arr);

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

console.log("arr first value \"" + arr[0] + "\". Is of type: " + typeof arr[0]);
console.log("arr first value \"" + arr[1] + "\". Is of type: " + typeof arr[1]);
console.log("arr first value \"" + arr[2] + "\". Is of type: " + typeof arr[2]);

let arr2 = new Array(10);

console.log(arr2);

//

let color = ["red", "green", "blue"];
let boolean = [true, false, false, true];
let emptyArr = [];

console.log("The lenght of  the colors array is: " + color.length)
console.log("The lenght of  the boolean array is: " + boolean.length)
console.log("The lenght of  the empty array is: " + emptyArr.booleanh)

//finding position in array-----------------------
let index = color.indexOf("green");
console.log("index of green is: " + index);
//------------------------------------------------

// for (let i = 0; i < boolean.length; i++) {
//     console.log(colors[i]);

// }
console.log("-------------------------------------------");

let arr10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr10.length);
console.log(arr10[arr10.length - 1]);

console.log(color[1])

//

let shoppingList = ["Milk", "Bread", "Apples"];
console.log(shoppingList)
//length
console.log("Length of the shopping list is: " + shoppingList.length);
//upd brToBa
shoppingList[1] = "Banana";
console.log(shoppingList);

console.log("-------------------------------------------");


let favouriteFruits = ["grapefruit", "orange", "lemon"];
console.log(favouriteFruits);

let lenghtOfFavouriteFruits1 = favouriteFruits.push("tangerine");
console.log(favouriteFruits);

let lenghtOfFavouriteFruits2 = favouriteFruits.push("lime");

console.log(lenghtOfFavouriteFruits2, typeof lenghtOfFavouriteFruits2);

console.log(favouriteFruits);

let lenghtOfFavouriteFruits3 = favouriteFruits.splice(2, 1, "fruit1", "fruit2");
console.log(favouriteFruits);
console.log(lenghtOfFavouriteFruits3);

let arrNum1 = [1, 2, 3];
let arrNum2 = [4, 5, 6];
let arrNum3 = arrNum1.concat(arrNum2);

console.log(arrNum3);

let arrNum4 = arrNum3.concat(7, 8, 9);

console.log(arrNum4);

delete (arrNum4[7]);
console.log(arrNum4);


