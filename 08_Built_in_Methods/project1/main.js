let myString = "randomly";

function scramble(str = "") {
    let stringLength = str.length;
    let scrambledString = "";
    for (let i = 0; i < str.length; i++) {
        let stringIndex = Math.floor(Math.random() * stringLength)
        let stringCharacter = str[stringIndex]
    }
}


