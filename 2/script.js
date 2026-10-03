"use strict";

/* მასივის შექმნა */

/* let arr = new Array(5);
let arr1 = [];

console.log(arr);
arr[0] = 1;
console.log("arr.length:", arr.length);
console.log("arr", arr);
console.log(arr1);
console.log("arr1.length:", arr1.length); */

/* let arr = new Array("Java", "JS", "SQL");*/
/* let arr = ["Java", "JS", "SQL"]; */
/* arr[0] = "Angular";
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]); */

/* length/სიგრძე */
/* let arr = new Array("Java", "JS", "SQL");
console.log(arr.length); */

/* 
  mix of values 
  ნებისმიერი ტიპის მონაცემი 
*/
/* let arr = [
  "Java",
  { name: "JS" },
  true,
  function () {
    console.log("hello JS");
  },
];

console.log(arr[1].name);
console.log(arr[2]);
arr[3](); */

/* 
  მასივის ბოლო ელემენტის აღება 
*/
/* let arr = new Array("Java", "JS", "SQL");
console.log("arr", arr);
console.log("arr", arr[arr.length - 1]);
console.log(arr.at(-2));
 */
/* 
  მეთოდები pop/push და shift/unshift
 */

/* const numbers = [2, 4, 6, 8, 10];
console.log("numbers.length", numbers.length); //5
const last = numbers.pop();
console.log("last", last); // 10
console.log("numbers", numbers); // 4
console.log("numbers new length", numbers.length); // 4
numbers.push(10, 18);
console.log("numbers", numbers); */

/* const numbers = [2, 4, 6, 8, 10];
console.log(numbers.length); //5
numbers.push(10, 18);
/* console.log(last); // 10 */
/* console.log(numbers); */ // 4

/* const numbers = [10, 20, 30];
let number = numbers.shift();
let number1 = numbers.unshift(20, 30);
console.log({ number });
console.log(numbers);
console.log(number1);
console.log({ length: numbers.length }); */
/* const numbers = [10, 20, 30];
let number = numbers.unshift(20, 30);

console.log({ number });
console.log(numbers);
console.log({ length: numbers.length }); */

/* 
  მეთოდი splice
  delete arr[1]
*/

/* let arr = ["I", "go", "home"];

delete arr[1]; // remove "go"

console.log(arr[1]); // undefined

// now arr = ["I",  , "home"];
console.log(arr.length); // 3
console.log(arr); // 3 */

/* let arr = ["I", "study", "JavaScript"];

let test = arr.splice(1, 1);

console.log(arr);
console.log("test ", test);
console.log(arr.length); */

/* let arr = [1, 2, 5];

arr.splice(-1, 0, 3, 50);
arr.splice(-2, 0, 2, 2);
console.log(arr.length);
arr.splice(-4, 4, 3, 3);
console.log(arr.length);
console.log(arr); */

/* 
  slice
*/

/* let arr = [1, 2, 3, 4, 5];

console.log(arr.slice(0, 2)); //[1, 2]
console.log(arr.slice(-2)); //[4, 5]
console.log(arr); //[1, 2, 3, 4, 5] */

/* 
  concat
*/

/* let arr = [1, 2];

console.log(arr.concat([3, 4])); // 1,2,3,4
console.log(arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6
console.log(arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6

let a1 = arr.concat([3, 4], 5, 6);
console.log("arr", arr);
console.log("a1 ", a1); */

/* 
  indexOf lastIndexOf
*/

/* let arr = [1, 0, 5, 6, 9, false];

console.log(arr.indexOf(0)); // 1
console.log(arr.indexOf(false, 4)); // 2
console.log(arr.indexOf(null)); // -1

console.log(arr.includes(1)); // true */

/* 
  reverse, join, split
*/

/* const array1 = ["one", "two", "three"];
console.log("array1:", array1);
const reversed = array1.reverse();
console.log("reversed:", reversed);

const elements = ["Fire", "Air", "Water"];
console.log(elements.join(" ")); */

/* const str =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

const words = str.split(" ");
console.log(words);

const strCopy = str.split();
console.log(strCopy); */

/* 
  filter, map, sort
*/

/* const arr = [1, 0, 5, 6, 9, -1, 5, -3, 0, -4];
const result = arr.filter((num) => num > 0);
console.log(result);
 */

/* const arr = [1, 4, 9, 16];
const map1 = arr.map((x) => x * 2);
console.log(map1); //[2, 8, 18, 32] */

// let numbers = [0, 3, 30, 1, 10, 2, 3, 20];
// /* numbers.sort(); */
// numbers.sort(function (a, b) {
//   if (a > b) return 1; //a უნდა გადავიდეს მარჯვნივ (ანუ b წინ დგება)
//   if (a < b) return -1; //a უნდა დადგეს მარცხნივ (ანუ a წინ დგება)
//   return 0; //არ იცვლიან ადგილებს
// });
// console.log(numbers);

// numbers.sort(function (a, b) {
//   if (a > b) return -1; // თუ a > b — a დგება მარცხნივ (წინ), ანუ კლებადობით ალაგებს
//   if (a < b) return 1; // თუ a < b — b დგება მარცხნივ (წინ), ანუ a გადადის უკან
//   return 0; //არ იცვლიან ადგილებს
// });
// console.log(numbers);

// numbers.sort((a, b) => a - b); // ზრდადობით
// console.log(numbers);
// numbers.sort((a, b) => b - a); // კლებადობით
// console.log(numbers);

/* 
  forEach, for…of
*/
/* let fruits = ["Apple", "Peach", "Orange", "grapes"];
for (let fruit of fruits) {
  console.log(fruit);
}

for (const [key, value] of fruits.entries()) {
  console.log(`${key}: ${value}`);
}

for (let fruit in fruits) {
  console.log(fruit);
}

fruits.forEach(function (fruit, i, arr) {
  console.log(`${i}: ${fruit}`);
}); */
