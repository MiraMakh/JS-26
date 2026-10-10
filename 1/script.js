"use strict";

/*   Strict Mode
  მკაცრი რეჟიმი */

/* გატესტეთ strict რეჟიმში */
// const interface = 15;
// console.log(`interface value is ${interface}`);
// let private = 65;
// console.log(`private value is ${private}`);

//console log error და clear
// console.log("JavaScript Fundamentals");
// console.error("JavaScript Fundamentals");

// setTimeout(() => {
//   console.log("setTimeout");
//   console.clear();
// }, 1000);

/* minNum = 16;
console.log(minNum);
 */
/* let, const და var
ცვლადების დასახელების წესები (_ $ || M %, Uppercase constants) */

/* var numberVar = 15;
let numTest = 'test string';
if(a==b){

  numTest 
  let numTest;

  numTest=a+b
} 

numTest1 = 1

const TEST_VAR='text';

numberVar = 'text';*/

let minNum = 15;
/* minNum = "b"; */
/* minNum = {}; */
/* minNum = []; */
/* minNum = null; */
/* minNum = () => {}; */
/* minNum = true; */
/* const MIN_NUMBER_STRING = "This is you min munber";
const UREST_API_URL = "";
const REQ_DEF = {
  sort: "ASC",
  page: 1,
}

console.log(MIN_NUMBER_STRING);
console.log("type of min number:", typeof minNum);
console.error('test error') */

/* let testVar = null;
console.log("!!testVar", !!testVar);
console.log("!testVar", !testVar);
d
if(!testVar){
  return;
} */

// მონაცემთა ტიპები (Data Types)

// მათემატიკური ოპერატორები (**)

//მინიჭების ოპერატორები (+= *= )

//შედარების ოპერატორები (=== და ==)

/* let varOne = 15;
let varTwo = "15";
1515;
let isNumber = false;
console.log("varOne == varTwo", varOne == varTwo);
console.log("varOne != varTwo", varOne != varTwo);
console.log("varOne === varTwo", varOne === varTwo);
console.log("varOne !== varTwo", varOne !== varTwo);
console.log("varOne === varTwo", varOne === varTwo);
console.log("varOne+varTwo", varOne + varTwo);
console.log("typeof varOne+varTwo", typeof (varOne + varTwo));
console.log("varOne-varTwo", varOne - varTwo);
console.log("typeof varOne-varTwo", typeof (varOne - varTwo));

console.log("0 === null", 0 === null);
console.log("0 == null", 0 == null);
console.log("undefind == null", undefined == null);
console.log("typeof undefind", typeof undefined);
console.log("undefind === null", undefined === null); */

/* cconsole.log("!!", !!varTwo); */
// && და ||

//სტრიქონის და შაბლონის ლიტერალი  (Strings Literal და Template Literal)

let varForTemp = 11;
/* let error = `There was ${varForTemp} error ${8 + 9} in your code`;
console.log("error", error);
console.log(typeof error); */

if (varForTemp == 11) console.log("11 in if");
varForTemp == 11 && console.log("11 in &&");
/* varForTemp == 11 || console.log("11 in &&"); */

// if, ?:, switch

/* varForTemp === 15
  ? console.log(error)
  : varForTemp === 10
  ? console.log("10")
  : console.log("There is no error"); */
/* varForTemp === 15 ? console.log(error) : 0==0? : ; */

/* const passExams = true;
let isStudent = true;

passExams
  ? (isStudent = true)
  : console.error("სამწუხაროდ თქვენ ვერ გახდით სტუდენტი");

isStudent
  ? console.log("გილოცავთ თქვენ შეგიძლია განაგრძო განვითარება")
  : console.error(
      "სამწუხაროდ თქვენ არ ხართ სტუდენტი მაგრამ ჯერ კიდევ ყველაფერი წინ გაქვთ"
    ); */

/*  
    Built in Functions
    ჩაშენებული ფუნქციები
    alert, prompt და confirm
*/

/* 
  Function Declaration
  ფუნქციის დეკლარაციება 
  პარემეტრები და default პარამეტრები
*/

/* const textToPrint = "test text for function";
printText(textToPrint);
function printText(text) {
  console.log(text);
} */

/* გატესტეთ strict რეჟიმში */
/* const PROMPT_TITLE = "რამდენი წლის ხართ?";
let age = prompt(PROMPT_TITLE, 19);
console.log("age", age);
alert("გამარჯობა");
confirm(PROMPT_TITLE);

if (age < 19) {
  function welcome() {
    //debugger
    alert("გამარჯობა");
  }
} else {
  function welcome() {
    alert("მოგესალმებით");
  }
}

welcome(); */

/* 
  Function Expression 
  ფუნქცია გამონათქვამი / გამოხატულება
*/

/* let textToPrint = "test text for function";
let printText = function (text) {
  console.log(text);
};
printText(textToPrint); */

/* let age = prompt("რამდენი წლის ხართ?", 19);
let welcome;
if (age < 19) {
  welcome = function () {
    alert("გამარჯობა");
  };
} else {
  welcome = function () {
    alert("მოგესალმებით");
  };
}
welcome(); */

/* let age = prompt("რამდენი წლის ხართ?", 19);
let welcome =
  age < 19
    ? function () {
        alert("გამარჯობა");
      }
    : function () {
        alert("მოგესალმებით");
      };
welcome(); */

/* 
  Arrow functions 
  ისრიანი ფუნქციები
*/
/* let age = prompt("რამდენი წლის ხართ?", 19);
let welcome =
  age < 19
    ? () => {
        return alert("გამარჯობა");
      }
    : () => alert("მოგესალმებით");
welcome(); */
/* let welcome1 = () => alert("გამარჯობა");
let sumOfNumbers = (n) => {
  return n + n;
};

()=>{} */

/*  Anonymous Functions 
  ანონიმური ფუნქციები
*/
/* function loadText(){}

let test = function(){}
let test = ()=>{}

setTimeout(function () {
  console.log("setTimeout1 გაეშვება 1 წამში");
}, 0);

setTimeout(() => {
  console.log("setTimeout2 გაეშვება 1 წამში");
}, 0); */

/* (function () {
  console.log("გაეშვება");
})();

(() =>{
  console.log("გაეშვება1");
})(); */

/* ()(); */

/* function loadText(){}
loadText(); */
/* 
  console.table
*/

/* return sayHi */
/* function greeting() {
  let message = "Hi";

  function sayHi() {
    console.log(message);
  }

  return sayHi;
} */

/* Closure */
/* let x = 5;

function outer() {
  let b = 10;
  function inner() {
    let a = 20;
    console.log(a + b);
  }
  return inner;
}

function outer1() {
  let b = 10;
  let result = 0;
  if (b) {
    result = b + 14;
  }
  return result;
}

let X = outer();
let Y = outer();

console.log("x", typeof X);
console.log("y", typeof Y);

X();
Y(); */
