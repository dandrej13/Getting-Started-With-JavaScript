let shoppingList = ["Milk"];
shoppingList.push("Bread");
shoppingList.push("Apples");
console.log(shoppingList);
//
//delete shoppingList[2];
//console.log(shoppingList)

//shoppingList.shift(2)
//console.log(shoppingList)

shoppingList.splice(1, 1, "Bananas", "Eggs");
console.log(shoppingList);

//
//delete shoppingList[2];
//console.log(shoppingList)

//delete the LAST item of an array
let lastItem = shoppingList.pop();
console.log(shoppingList);
console.log(lastItem);
//---------------------------------

//prasanje delete go brise stringot ama ne i itemot i ostanuva "empty"

//delete shoppingList[1];
//console.log(shoppingList)

//sorting alphabetically-----
shoppingList.sort();
console.log(shoppingList);
//---------------------------

//find index of milk
let milkIndex = shoppingList.indexOf("Milk");
console.log(milkIndex);
//-------------------

//add string after certain index without deleting
let bananasIndex = shoppingList.indexOf("Bananas");
shoppingList.splice(bananasIndex + 1, 0, "Carrots", "Lettuce");
console.log(shoppingList);
//------------------------------------------------


//combining two variables one after another into a new one
let newShoppingList = ["Juice", "Pop"]
let combinedShoppingList = shoppingList.concat(newShoppingList, newShoppingList);
console.log(combinedShoppingList);
//---------------------------------------------------------


//finding the last index of and element into an array
let lastIndexOfPop = combinedShoppingList.lastIndexOf("Pop");
console.log(lastIndexOfPop);
//---------------------------------------------------




