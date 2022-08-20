let arr = ["Laurance", "Mike", "Larry", "Kim", "Joanne", "Laurance", "Mike", "Laurance", "Mike", "Laurance", "Mike"];

let filteredArr = arr.filter((element, index, array) => {
    console.log(element, "at position", index);
    console.log(array.indexOf(element), "is equal to", index, array.indexOf(element) === index);

    return array.indexOf(element) === index
});


console.log(filteredArr);



let newArr = [1, 2, 3, 4, 5];

let mapped = newArr.map((x) => x + 1)


function mapping(y) {
    return y + 1
}

let mapMapped = mapped.map(mapping);

let lArr = [];
let last = mapMapped.forEach((element) => {
    let sol = element + 1
    lArr.push(sol)
});


let fArr = [];
for (let i = 0; i < lArr.length; i++) {
    const element = lArr[i] + 1;
    fArr.push(element)

}
console.log(newArr);
console.log(mapped);
console.log(mapMapped);
console.log(lArr);
console.log(fArr);