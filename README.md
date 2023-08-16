# Data Structures Examples

The focus will be on working on the Object, Array, Map and Set data structures in JavaScript, through a series of examples.

## Working with arrays in JavaScript

In this reading, the focus is on three specific methods that exist on arrays:

1. forEach
2. filter
3. map

## The forEach() method

Arrays in JavaScript come with a handy method that allows you to loop over each of their members.

Here's the basic syntax:

```
const fruits = ["kiwi", "mango", "apple", "pear"];
function appendIndex(fruit, index) {
    console.log(`${index}, ${fruit}`)
}
fruits.forEach(appendIndex)
```

The forEach() method accepts a function that will work on each array item. That function's first parameter is the current array item itself, and the second(optional) parameter is the index.

Very often, the function that the forEach() method needs to use is passed directly into the method call like this:

```
const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach(function(veggie, index){
    console.log(`${index}, ${fruit}`);
});
```

This makes for more compact code, but perhaps somewhat harder to read. To increase readability, sometimes arrow functions are used.

## The filter() method
Another useful method on the array os the filter() method. It filters your arrays based on a specific test. Those array items that pass the test are returned.

```
const nums = [0, 10, 20, 30, 40, 50];
nums.filter(function(num){
    return num > 20
})
```

Here's the returned array value:
```
[30,40,50]
```

Similar to the forEach() method, the filter() method also accepts a function and that function performs some work on each of the items in the array.

## The map method

This method is used to map each array item over to another array's item, based on whatever work is performed inside the function that is passed-in to the map as a parameter.

For example:
```
[0,10,20,30,40,50].map(function(num){
    return num / 10
})
```
The return value from the above code is:
```
[0,1,2,3,4,5]
```

Choosing a proper data structure affects the very code that you can write. This is because the data structure itself comes with some built-in functionality that makes it easier to perform certain tasks or makes it harder or even impossible without converting your code to a proper structure.

## Working with Objects in JavaScript

The example below demonstrates how to use the object data structure to complete a specific task. This task is to convert an object to an array.

```
const result = [];
const drone = {
    speed: 100,
    color: "yellow"
}
const droneKeys = Object.keys(drone);
droneKeys.forEach(function(key){
    result.push(key, drone[key])
})
console.log(result)
```

This the result of executing the above code:
```
['speed', 100, 'color', 'yellow']
```
Although this is possible and works, having to do something like this might mean that you haven't chosen the correct data structure to work with in your code.

On the flip side, sometimes you don't get to pick the data structure you're working with. Perhaps that data comes in from a third-party data provider and all you can do is code your program so that it consumes it. 

## Working with Maps in JavaScript

To make a new Map, you can use the Map constructor
```
new Map();
```

A map can feel very similar to an object in JS. However, it doesn't have inheritance. No prototypes. This makes it useful as a data storage.

For example:
```
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up")
bestBoxers.set(3, "The third place")

console.log(bestBoxers);
```

Here's the console output:
```
Map(3) {1 => 'The Champion', 2 => 'The Runner-up', 3 => 'The third place'}
```
To get a specific value, you need to use the get() method. For example:
```
bestBoxers.get(1); // 'The Champion'
```

## Working with Sets in JavaScript

A set is a collection of unique values.

To build a new set, you can use the Set constructor:

```
new Set()
```

The Set constructor can, for example, accept an array.

This means that it can be used to filter an array for unique members.

```
const repetitiveFruits = ['apple', 'pear', 'apple', 'pear', 'plum', 'apple']
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits)
```

The above code outputs the following in the console:

```
{'apple', 'pear', 'plum'}
```

## Other data structures in JavaScript

Besides the built-in data structures in JavaScript, it's possible to build non-native, custom data structures.

These data structures come built-in natively in some other programming languages  or even those other programming languages don't support them natively.

Some more advanced data structures that have not been covered include:

- Queues
- Linked lists (singly-linked and doubly-linked)
- Trees
- Graphs