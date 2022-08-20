let arr = ["grapefruit", 4, "hello", 6, true];
function printStuff(element, index) {
    console.log("Printing stuff:", element, "on array position:", index);
    console.log(element);
    console.log(index);
    console.log("====================");
};

arr.forEach(printStuff);

function checkString(x, y) {
    return typeof x === "string"
}

let filteredArr = arr.filter(checkString);
console.log(filteredArr);
console.log("========");
console.log(arr);
arr.copyWithin(0, 2, 4);
console.log(arr);



console.log("/]//////////////////////////////");


let newArr = [1, 2, 3, 4, 5];
// function mapping(element) {
//     return element + 1
// }

let mapped_arr = newArr.map((element) => element * 2);
console.log(mapped_arr);

function bobiMap(element) {
    let mapiranArr = [];
    for (let i = 0; i < newArr.length; i++) {
        const element = newArr[i] + 1;
        mapiranArr.push(element);
    }
    return mapiranArr
}

console.log(bobiMap(newArr));
