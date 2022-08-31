let addNeed = document.getElementById("addNeed");
let addHave = document.getElementById("addHave");
let itemInput = document.getElementById("itemInput");
let needList = document.getElementById("needList");
let haveList = document.getElementById("haveList");
addNeed.addEventListener("click", addItem);
addHave.addEventListener("click", addItem);

function addItem(event) {
    event.preventDefault();
    let userInput = itemInput.value;
    if (userInput !== "") {
        let list;
        let checked = "";
        if (event.srcElement.id === "addNeed") {
            list = document.getElementById("needList");
        } else {
            list = document.getElementById("haveList");
            checked = "checked";
        }
        list.innerHTML +=
            `<li class="row">
            <input class="col-2 my-auto" type="checkbox" ${checked} name="item"
                onclick="switchList(this)">
            <span class="col-2">${userInput}</span>
            <button class="col-1 btn btn-outline btn-sm btn-warning" onclick="deleteItem(this)">x</button>
        </li>`
        itemInput.value = "";

    }
}

function addNeedItem(event) {
    event.preventDefault();
    let userInput = itemInput.value;
    needList.innerHTML +=
        `<li><input type="checkbox" name="item"  onclick="switchList(this)"> ${userInput} <button onclick="deleteItem(this)">X</button></li>`
};

function addHaveItem(event) {
    event.preventDefault();
    let userInput = itemInput.value;
    haveList.innerHTML +=
        `<li><input type="checkbox" name="item"  onclick="switchList(this)"> ${userInput} <button onclick="deleteItem1(this)">X</button></li>`

};


function deleteItem(element) {
    let listItem = element.parentElement;
    let list = listItem.parentElement;
    list.removeChild(listItem)
};






function switchList(element) {
    console.log(element.checked);
    if (element.checked) {
        needList.removeChild(element.parentElement);
        haveList.appendChild(element.parentElement);
    } else {
        haveList.removeChild(element.parentElement);
        needList.appendChild(element.parentElement);

    }
}