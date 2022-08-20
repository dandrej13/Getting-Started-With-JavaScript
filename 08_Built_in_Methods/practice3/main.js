let result = "Hello JavaScript";
let arr_result = result.split(" ");
console.log(arr_result);

let result2 = "Mario,Dejan,Stefan,Andrej";
let arr_result2 = result2.split(",");
console.log(arr_result2);

arr_result2.forEach(element => {
    let hello = "Hello ";
    console.log(hello.concat(element));

});

let x = arr_result.join(" ");
console.log(x);


let poem = "Roses are red, violets are blue";
console.log(poem.indexOf("re"));
console.log(poem.split(" ")[2]);





//////////my own exercise

let age = [21, 34, 22, 10, 41, 5, 64, 1, 37, 47, 55, 88, 65, 43, 2, 1, 7];

let canDrink = [];
for (let i = 0; i < age.length; i++) {
    if (age[i] >= 21 && age[i] < 55) {
        canDrink.push(age[i])
    }
}

console.log(canDrink);