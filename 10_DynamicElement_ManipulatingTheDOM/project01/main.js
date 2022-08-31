/* <div class="card" style="width: 18rem; height: fit-content;">
<img src="./img/${obj.imgName}" class="card-img-top" alt="...">
<div class="card-body">
    <h5 class="card-title">${obj.cardTitle}</h5>
    <p class="card-text">${obj.description}</p>
    <a href="${obj.hyperlink}" class="btn btn-primary">${obj.button}</a>
</div>
</div> */


let myCard = [

    {
        imgName: "pic1.jpg",
        cardTitle: "First Card",
        description: "Some kind of text to explain something in the text paragraph",
        button: "Link to LinkedIn",
        hyperlink: "https://linkedin.com",
    },



    {
        imgName: "pic2.jpg",
        cardTitle: "Second Card",
        description: "Some kind of text to explain something in the text paragraph",
        button: "Link to facebook",
        hyperlink: "https://facebook.com"
    },


    {
        imgName: "pic3.jpg",
        cardTitle: "Third Card",
        description: "Some kind of text to explain something in the text paragraph",
        button: "Link to twitter",
        hyperlink: "https://twitter.com"
    },



    {
        imgName: "pic4.jpg",
        cardTitle: "Fourth Card",
        description: "Some kind of text to explain something in the text paragraph",
        button: "Link to instagram",
        hyperlink: "https://instagram.com"
    },




    {
        imgName: "pic5.jpg",
        cardTitle: "Fifth Card",
        description: "Some kind of text to explain something in the text paragraph",
        button: "Link to youtube",
        hyperlink: "https://youtube.com"
    }];

let main = document.getElementById("main")

myCard.forEach(obj => {
    main.innerHTML += `
    <div class="card" style="width: 18rem; height: fit-content;">
<img src="./img/${obj.imgName}" class="card-img-top" alt="...">
<div class="card-body">
    <h5 class="card-title">${obj.cardTitle}</h5>
    <p class="card-text">${obj.description}</p>
    <a href="${obj.hyperlink}" class="btn btn-primary">${obj.button}</a>
</div>
</div>
    `
});