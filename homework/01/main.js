let today = new Date();


let day = today.getDay();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];

console.log("Today is : " + daylist[day] + ".");

let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
let prepand = (hour >= 12) ? "PM " : " AM ";

//??????????????????????????????????? VERY HARD;
