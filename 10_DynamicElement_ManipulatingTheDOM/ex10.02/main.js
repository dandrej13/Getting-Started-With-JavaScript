console.log(document.getElementById("list"));
console.log(document.getElementById("secParagraph"));
console.log(document.getElementById("secTitle"));


let myList = ["Bananas", "Apples", "Milch", "Chocolate"];
document.getElementById("list").innerHTML = ""
myList.forEach(element => {
    document.getElementById("list").innerHTML += "<li>" + element + "</li>";
})
    ;