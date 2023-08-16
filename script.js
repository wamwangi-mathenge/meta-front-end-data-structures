// The forEach() method
// Basic syntax
// Example 1
const fruits = ["kiwi", "mango", "apple", "pear"];
function appendIndex(fruit, index) {
    console.log(`${index} ${fruit}`)
}
fruits.forEach(appendIndex)

console.log("--------------------------------")

// Example 2
const colors = ["red", "blue", "yellow", "green"];
function appendColors(color, index) {
    console.log(`${index} ${color}`)
}
colors.forEach(appendColors)

console.log("---------------------------------")

// Using the method call approach
// Example 1
const animals = ["cheetah", "leopard", "lion", "tiger"]
animals.forEach(function(animal, index){
    console.log(`${index} ${animal}`)
})

console.log("---------------------------------")

const veggies = ["onion", "garlic", "ginger", "tomato"]
veggies.forEach(function(veggie, index){
    console.log(`${index} ${veggie}`)
})
