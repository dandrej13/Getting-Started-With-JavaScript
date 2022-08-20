let endDate = new Date("09/08/2022 19:00:00");

let currentDate = Date.now();

let msg = "There are "
let msg2 = "left until the wedding"



function countdown(date) {
    let dateParsed = Date.parse(date);
    let returns = dateParsed - currentDate;

    let days = Math.floor(returns / 1000 / 60 / 60 / 24);
    let hours = Math.floor(returns / 1000 / 60 / 60);
    let minutes = Math.floor(returns / 1000 / 60);
    let secondsFromMins = (returns / 1000 / 60) % 1;
    let seconds = Math.floor(returns / 1000);
    // console.log(countdown(endDate));
    console.log(days + " days ");
    console.log(hours + " hours  ");
    console.log(minutes + " minutes");
    console.log(seconds + " seconds");
    // console.log("minutes" minutes + " and " + Math.floor(secondsFromMins * 60) + " seconds");
    ///full time remaining

    let dRemaining = returns / (1000 * 60 * 60 * 24);
    console.log(Math.floor(dRemaining), "days");
    let hRemaining = (dRemaining - Math.floor(dRemaining)) * 24;
    console.log(Math.floor(hRemaining), "hours");
    let mRemaining = (hRemaining - Math.floor(hRemaining)) * 60;
    console.log(Math.floor(mRemaining), "minutes");
    let sRemaining = Math.floor((mRemaining - Math.floor(mRemaining)) * 60);
    console.log(Math.floor(sRemaining), "seconds");

    document.getElementById("date").innerHTML = msg //+ days + " days or " + hours + " hours  or " + minutes + " minutes or " + seconds + " seconds left until the wedding";
    document.getElementById("days").innerHTML = days + " days  or ";
    document.getElementById("hours").innerHTML = hours + " hours   or";
    document.getElementById("minutes").innerHTML = minutes + " minutes  or ";
    document.getElementById("seconds").innerHTML = seconds + " seconds ";
    document.getElementById("msg").innerHTML = msg2;

    document.getElementById("date1").innerHTML = msg + Math.floor(dRemaining) + " days " + Math.floor(hRemaining) + " hours " + Math.floor(mRemaining) + " minutes " + sRemaining + " seconds " + msg2;


}

countdown(endDate)






















// function reload() {
//     var container = document.getElementById("list");
//     var content = container.innerHTML;
//     container.innerHTML = content;

//     //this line is to watch the result in console , you can remove it later	
//     console.log("Refreshed");
// }

// reload()





console.log("milliseconds now to 1970  = " + currentDate);
//////////////////////////////////////////////////////////////////////////////////




// let days = Math.floor(countdown(endDate) / 1000 / 60 / 60 / 24);
// let hours = Math.floor(countdown(endDate) / 1000 / 60 / 60);
// let minutes = Math.floor(countdown(endDate) / 1000 / 60);
// let secondsFromMins = (countdown(endDate) / 1000 / 60) % 1;
// let seconds = Math.floor(countdown(endDate) / 1000);
// // console.log(countdown(endDate));
// console.log(days + " days ");
// console.log(hours + " hours  ");
// console.log(minutes + " minutes");
// console.log(seconds + " seconds left until the wedding");
// // console.log("minutes" minutes + " and " + Math.floor(secondsFromMins * 60) + " seconds");

// document.getElementById("date").innerHTML = msg + days + " days or " + hours + " hours  or " + minutes + " minutes or " + seconds + " seconds left until the wedding";
// document.getElementById("days").innerHTML = days + " days; "
// document.getElementById("hours").innerHTML = hours + " hours; "
// document.getElementById("minutes").innerHTML = minutes + " minutes; "
// document.getElementById("seconds").innerHTML = seconds + " seconds "

// setInterval(clockTick, 1000);
