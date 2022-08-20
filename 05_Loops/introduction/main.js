i = 0;
while (i < 10) {
    console.log(i);
    i++
}


let arr = ["Miki", "Igor", "Mario", "Stefan", "Andrej"];
let notFound = true;

while (notFound && arr.length > 0) {
    if (arr[0] === "Stefan") {
        console.log("Found him")
        notFound = false
    } else {
        arr.shift();
    }

}
console.log(arr)


let n1 = 1;
let n2 = 2;
let temp;
let fibbonaciArr = [];


while (fibbonaciArr.length > 100) {
    temp = n1 + n2;
    n1 = n2;
    n2 = temp;


}






// while (fibbonaciArr.length < 25) {
//     fibbonaciArr.push(n1);
//     temp = n1 + n2;
//     n1 = n2;
//     n2 = temp;
// }
console.log(fibbonaciArr)