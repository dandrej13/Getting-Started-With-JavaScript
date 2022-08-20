//// replace vowels with numbers



let myString = "I love JavaScript";

console.log(myString);

function replacement(param) {
    let splitString = param.split("");
    console.log(splitString);


    splitString.forEach((element, index) => {
        switch (element) {
            case "a":
            case "A":
                splitString[index] = "1";
                break;
            case "e":
            case "E":
                splitString[index] = "2";
                break;
            case "i":
            case "I":
                splitString[index] = "3";
                break;
            case "o":
            case "O":
                splitString[index] = "4";
                break;

        }
    });

    return splitString.join("")
};

console.log(replacement(myString));