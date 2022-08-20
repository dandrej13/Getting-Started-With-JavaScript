let arr = [23, 12, 518, 74, 24, 111];

let multiplier = arr.map((x) => {
    return x * 2
});

let multiplier2 = arr.map((x) => x * 2)

console.log(arr);
console.log("arr * 2", multiplier);
console.log("arr2 * 2", multiplier2);
