let myV = "1000";

console.log("Global variable : " + myV);

(function change() {
    myV = "2000";
    console.log("first variable in function : " + myV);
})();

console.log("Global variable after a function : " + myV);


let myF =
    (function () {
        myV = "Local IIFE value";
        return myV;
    })();


console.log("variable with a function : " + myF);
console.log("varialbe  thats written in to a function that changes the global variable :  " + myV);
