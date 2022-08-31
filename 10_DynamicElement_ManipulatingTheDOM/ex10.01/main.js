console.dir(
    document.body
        .childNodes[1]
        .childNodes[1]
        .childNodes[1]
        .childNodes[3]
        .innerHTML
);

console.dir(document.body.children[0].children);

document.body
    .children[0].children[1].style.color = "blue";


document.body
    .children[0].children[2].style = "color: wheat";


document.body
    .children[0].children[3].style.color = "yellow"

document.body
    .children[0].children[4].style.color = "purple"

let main = document.querySelector(".main");

main.children[4].innerHTML = "<p>new</p>"

console.dir(main.children[4].innerHTML)
