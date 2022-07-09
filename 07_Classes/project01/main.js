let arr = [];
class Employee {
    constructor(fName, lName, yearsWorked) {
        this.firstName = fName;
        this.lastName = lName;
        this.years = yearsWorked;
    }
}

let firstP = new Employee("Mario", "Nikoloski", 4);
let secondP = new Employee("Stefan", "Simonovski", 2);
let thirdP = new Employee("Alek", "Kolarikj", 12);

arr.push(firstP, secondP, thirdP)
console.log(arr);

Employee.prototype.val = function () {
    return this.firstName + " " + this.lastName + " worked for " + this.years + " years."
};



for (let i = 0; i < 3; i++) {
    console.log(arr[i].val());;



}
arr.forEach(element => {
    console.log(element.val());
})