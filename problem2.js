const numbers = [40, 100, 1, 5, 25, 10];
const fruits = ["Banana", "apple", "Cherry", "date"];
//for sorting a array 
const sortArray=numbers.sort((a,b)=>a-b);
//console.log(numbers)
//for sorting a array of string 
fruits.sort((a,b)=>a.localeCompare(b));
//console.log(fruits);


const arr=[2,3,4,5,[3,4,[3,4]]]
//flate nested array using flat() method 
const flatArr=arr.flat(Infinity);
console.log(flatArr)



const tagsFromPosts = [
  ["javascript", "react", "css"],
  ["node", "express"],
  ["css", "html", "react"],
];


const flatArr1=tagsFromPosts.flat(Infinity)
const removeDup = [...new Set(flatArr1)];
console.log(removeDup);
