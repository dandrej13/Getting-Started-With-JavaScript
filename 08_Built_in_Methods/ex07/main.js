let myString = "randomly";

function scramble(str = "") {
    let stringMaxLength = str.length;
    let scrambledString = "";
    for (let i = 0; i < stringMaxLength; i++) {
        let stringIndex = Math.floor(Math.random() * str.length)
        // console.log(str[stringIndex]);
        // console.log(stringIndex);
        let randomCharacter = str[stringIndex];
        scrambledString = scrambledString + randomCharacter;
        str = str.substring(0, stringIndex) + str.substring(stringIndex + 1)
    }

    return scrambledString
}

let word = scramble(myString)

console.log(word);

