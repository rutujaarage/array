// array

// it is a similar group of type of array

// push - add elements to the end of the array , return  the new length
// let arr=[1,2,3,4,5];
// console.log(arr);
// consolr.log(arr.length);

// arr.push(6,7,8);

//pop= delete the last element from arrays, and it return the popped element. 
// let arr1=[1,2,3];
// console.log(arr1);
// let result = arr1.pop();
// console.log(arr1);
// console.log(result);//return in result

//......................home work........................
// fruits = ['apple', 'banana', 'orange', 'kiwi']

// fruits.pop();
// console.log(fruits)
// console.log(fruits.pop())
// console.log(fruits)
// console.log(fruits.push('strawberry'))
// console.log(fruits.push('melon'))
// console.log(fruits) 


console.log(fruits.shift());//apple .... remove firsst element and return that element.
console.log(fruits); // banana, orange, kiwi

let result= fruits.unshift('first');// add and new lengh return

console.log(fruits);//first, apple, banana, orange,kiwi
console.log(fruits);//5


// ................indexof......................

connsole.log(fruits.indexof('banana'))

//..................................... slice..........................
//two values one is start and end indexex.
// it grab the element and return the result
//slice work with negative indexes
//direction is same
let fal=['apple','banana','orange', 'kiwi','melon'];
 var result1 =console.log(fal.slice(1,3));//orange
console.log(result1);//melon

