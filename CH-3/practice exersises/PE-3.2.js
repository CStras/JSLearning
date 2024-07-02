shoppingList = []; //step 1

// step 2
shoppingList.push("Milk");
shoppingList.push("Bread");
shoppingList.push("Apples");

//step 3
shoppingList.splice(1, 1, "Bananas", "Eggs");

//step 4
console.log(shoppingList[3], "was deleted.");
shoppingList.pop();

//step 5
shoppingList.sort();

//step 6
let findMilk = shoppingList.find(function (e) {
    return e === "Milk"
});
console.log(findMilk);

//step 7
shoppingList.splice(1, 0, "Carrots", "Lettuce");

//step 8
newList = ["Juice", "Pop"];

//step 9
let tempList = shoppingList.concat(newList);
let finalList = tempList.concat(newList);

//step 10
let lastPop = finalList.lastIndexOf("Pop");
console.log(lastPop);


console.log(finalList);



