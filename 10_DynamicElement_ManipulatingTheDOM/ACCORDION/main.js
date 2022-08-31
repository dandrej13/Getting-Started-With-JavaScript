window.onload = function () {
    let titleArr = document.getElementsByClassName("title");

    for (let i = 0; i < titleArr.length; i++) {
        let element = titleArr[i];
        element.addEventListener("click", myFunction);
    }

    function myFunction() {
        console.log(this);
        console.log(this.nextElementSibling);
        console.log(this.nextElementSibling.style);

        // this.nextElementSibling.classList.add("active")
        // if (this.nextElementSibling.classList.contains("active")) {
        //     console.log("test");
        // } else {
        //     this.nextElementSibling.classList.add("active")
        // }

        this.nextElementSibling.classList.toggle("active")
    }
}
