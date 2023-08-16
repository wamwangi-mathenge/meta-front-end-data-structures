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

console.log("-----------------------------")
console.log("-----------------------------")

// The filter() method
// Example 1
const nums = [0,10,20,30,40,50]
const filteredNums = nums.filter(function(num){
    return num > 20
})
console.log(filteredNums)

console.log("------------------------------")

// Example 2
// Find Even Numbers: Filter out all the even numbers from an array of integers.
const numms = [1,2,3,4,5,6,7,8,9]
const evenNumbers = numms.filter(function(numm){
    return numm % 2 == 0
})
console.log(evenNumbers)

console.log("------------------------")
console.log("------------------------")

// The map() method
// Example 1
const nummms = [0,10,20,30,40,50]
const dividedByTen = nummms.map(function(nummm){
    return nummm / 10
})
console.log(dividedByTen)

console.log("-------------------------")
console.log("-------------------------")

// Working with Objects in JS
const result = []
const drone = {
    speed: 100,
    color: "yellow"
}
const droneKeys = Object.keys(drone);
droneKeys.forEach(function(key){
    result.push(key, drone[key])
})
console.log(result)

console.log("---------------------------")

// Working with Maps in JS
// Example 1
// Use the Map constructor to make a new Map
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner's Up")
bestBoxers.set(3, "The 2nd Runners Up")

console.log(bestBoxers)

// To get the specific value, use the get() method
console.log(bestBoxers.get(1))
console.log(bestBoxers.get(2))
console.log(bestBoxers.get(3))

console.log("-----------------------------")

// Working with Sets in JavaScript
const repetitiveFruits = ["apple", "pear", "apple", "pear", "plum", "apple"];
const uniqueFruits = new Set(repetitiveFruits)
console.log(uniqueFruits)