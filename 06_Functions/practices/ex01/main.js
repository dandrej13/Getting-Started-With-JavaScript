function exercise(param) {
    console.log(param);
}

exercise("andr+ej");
exercise(5);
exercise(true);

//

function secondEx(param1, param2) {

    if (typeof param1 === "number" && typeof param2 === "number") {
        console.log(param1 * param2);

    } else {
        console.log("Not a valid number");
    }

}
secondEx(3, 5);
secondEx("Tekst", 56);
secondEx(4, true);


//


function thirdEx(num1) {
    // if (num1 % 2 === 0) {
    //     console.log(num1 + " is an even number");
    // } else {
    //     console.log(num1 + " is NOT an even number");
    // }

    num1 % 2 === 0 ? console.log(num1 + " is an even number") : console.log(num1 + " is NOT an even number");
}
thirdEx(3);
thirdEx(4);

let thirdExs = (numm) => numm % 2 === 0 ? console.log(num1 + " is an even number") : console.log(num1 + " is NOT an even number");

thirdEx(3);
thirdEx(4);

///

// let myWord = ["madam"] === myWord.reverse() ? console.log("Palindrom") : console.log("Not a palindrom!");

let newWord = "madam";

function polindrom(word) {
    let newWordArray = word.split("").reverse().join("");
    if (word.toLowerCase() === newWordArray.toLowerCase())
        console.log(word + " is a palindrom");
    else {
        console.log(word + " is not a palindrom");

    }
}
polindrom("mAdam")
polindrom("vodovod")