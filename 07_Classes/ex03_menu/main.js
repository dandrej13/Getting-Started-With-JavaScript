class Menu {
    #priceOfItems;
    #countOfItems;
    constructor(price, item) {
        this.#priceOfItems = price;
        this.#countOfItems = item;
    }

    calculate() {
        return this.#priceOfItems * this.#countOfItems;
    }

    get price() {
        return this.calculate()
    }



    // set price(priceSet) {
    //     this.#priceOfItems = priceSet;
    // }
}


let hamburger = new Menu(4, 2)

console.log(hamburger.price + "$");

//////////////////////////////////////////////

class Sum {
    #item1 = 3;
    #item2 = 5;
    constructor(amount1, amount2) {
        this.amount1 = amount1;
        this.amount2 = amount2;
    }

    calculation() {
        return this.#item1 * this.amount1 + this.#item2 * this.amount2;

    }

    get result() {
        return this.calculation()
    }
}


let naracka350 = new Sum(2, 2)
console.log(naracka350.result + "$");

