console.dir(document.body
    .children.forest
    .children.tree2
    .children.shrubberry
    .children.treasure.id);

console.dir(
    document.body
        .childNodes[3]
        .childNodes[3]
        .childNodes[1]
        .childNodes[1].id
);

let treasure = document.getElementById("treasure");
console.dir(
    treasure
        .parentElement
        .parentElement
        .parentElement.id
);

console.dir(
    treasure
        .parentNode
        .parentNode
        .parentNode.id
);