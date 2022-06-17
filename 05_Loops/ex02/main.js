let counter = 0;
let step = 11;
let i = 0

// do {
//     // counter = counter + step;
//     counter += step;
//     console.log("The counter is " + counter + ". The number of loops is " + ++i);

// } while (counter < 100);

while (counter < 100) {
    counter += step;
    console.log("The counter is " + counter + ". The number of loops is " + ++i);
}

for (let brojce = 0, c = 21; brojce <= 100; brojce += c) {
    console.log(brojce)
}
