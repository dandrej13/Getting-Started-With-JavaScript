let pi = Math.PI;
console.log(pi);


let ceil = Math.ceil(5.7);
let round = Math.round(5.7);
let floor = Math.floor(5.7);
console.log(ceil);
console.log(round);
console.log(floor);

console.log("--------------");

console.log(Math.floor(Math.random() * 11));
console.log((Math.floor(Math.random() * 10) + 1));
console.log(Math.floor(Math.random() * 100) + 1);

function fromTo(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(fromTo(5, 10));


console.log(new Date());

