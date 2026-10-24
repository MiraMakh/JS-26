"use strict";

/* ობიექტის შექმნა */

// let user = new Object(); //object constructor/ობიექტის კონსტრუქტორი სინტაქსი
// let user1 = {}; //object literal/ობიექტური ლიტერალი სინტაქსი

// console.log("user", user);
// console.log("user", { user, user1 });
// console.log("user type", typeof user);
// console.log("user1 type", typeof user1);

/* let student = {
  name: "Sandro", // key - name და value -Sandro
  age: 20, //key - age და value - 20
}; */

// console.log("სტუდენტის სახელი:", student.name); // Sandro
// console.log("სტუდენტის ასაკი:", student.age); // 20

// student.isActiveStudent = true;
// console.log("სტუდენტის სტატუსი:", student.isActiveStudent); // true
// console.log("სტუდენტი", student); //{ "name": "Sandro", "age": 20, "isActiveStudent": true }

// delete student?.age;
// // if(student){
// //   delete student?.age;
// // }
// console.log("სტუდენტი ასაკის წაშლა", student); //{ "name": "Sandro", "isActiveStudent": true }

// for (let property in student) {
//   console.log('property',property);
// }
// console.log("keys", Object.keys(student));
// console.log("values", Object.values(student));

// for (const [key, value] of Object.entries(student)) {
//   console.log(`${key}: ${value}`);
// }

// let student = {
//   name: "Sandro",
//   age: 20,
//   "likes Js": true,
// };

// student["likes Js"] = true; // ფროპერთის დამატება student ობიექტში
// console.log("multiword property keys", Object.keys(student));
// console.log("multiword property values", Object.values(student));

// if(student){

// }

// let key = "likes JS";
// student[key] = true;

/* გამოთვლადი ფროფერთების */
/* let hightestPoint = prompt("90 ქულაზე მეტი როგორ შეფასებად არის?", "a");

let points = {
  [hightestPoint]: 91,
};
points[hightestPoint] = 91
console.log('points.a',points.a);
console.log('points.b',points.b); */

/* function createStudent(name, age) {
  return {
    name: name,
    age: age,
  };
}

let studentFromFunction = createStudent("Nika", 20);

for (const [key, value] of Object.entries(studentFromFunction)) {
  console.log(`Student from function : ${key}: ${value}`);
}
 */

/* let user = { age: 30 };
let key = "age";
console.log("key in user:", key in user);

let obj = {
  0: "test",
};
console.log('obj["0"]',obj["0"]);
console.log('obj[0]', obj[0]);

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

let schedule = {};
console.log(isEmpty(schedule));
schedule["13:00"] = "JS lecture";
console.log(isEmpty(schedule)); */

/* 
  ობიექტების მითითებები და კოპირება
*/

// let user = { name: "Nino" };
// let admin = user;
// let guest = {};

// let test = {
//   ...user,
//   name: "Soso",
// };

// console.log("user", user);
// console.log("admin", admin);

// user.name = "Tamari";
// console.log("user", user);
// console.log(" user.name", user.name);
// console.log("admin", admin);

// console.log("user == admin", user == admin); // a == b true
// console.log("user === admin", user === admin); // a === b true

// let x = {};
// let y = {};

// console.log("x == y", x == y); //x == y false
// console.log("x === y", x === y); //x == y false

/* 
  კლონირება და შერწყმა, Object.assign
*/

/* let student = {
  name: "Tamari",
  age: 20,
};

let studentClone = {};

for (let key in student) {
  studentClone[key] = student[key];
}

console.log("student === studentClone", student === studentClone);
console.log("studentClone", studentClone); //{ "name": "Tamari", "age": 20 }

let studentStatus = { isActiveStudent: true };
let semester = { semester: 4 };

Object.assign(studentClone, student, studentStatus, semester);
console.log("studentClone", studentClone); */

/* 
ობიექტის მეთოდები და "this" 
*/

// let student = {
//   name: "Tamari",
//   age: 20,
// };

// student.writeExam = function () {
//   console.log(`Student ${student.name} is ready for my exam`);
// };

// student.writeExam(); //Student Tamari is ready for my exam

/* let student = {
  name: "Tamari",
  age: 20,
  writeExam: function () {
    console.log(`Student ${student.name} is ready for my exam`);
  },
}; */

/* let student1 = {
  name: "Tamari",
  age: 20,
  writeExam() {
    console.log(`Student ${student.name} is ready for my exam`);
  },
};

let student = {
  name: "Tamari",
  age: 20,
  writeExam() {
    console.log(`Student ${this.name} is ready for my exam`);
  },
}; */

/* student.writeExam = function () {
  console.log(`Student ${student.name} is ready for my exam`);
}; */

/* student.writeExam(); */

/* let user = {
  name: "Nino",
  writeExam() {
    console.log(`Student ${this.name} is ready for my exam`);
  },
};
let admin = user;
admin.writeExam();  */

/* let user = { name: "User" };
let admin = { name: "Admin" };

function writeExam() {
  console.log(`Student ${this.name} is ready for my exam`);
}

user.writeExam = writeExam;
admin.writeExam = writeExam;

user.writeExam();
admin.writeExam(); */

/* 
  კონსტრუქტორი, ოპერატორი "new"
*/
/* function User(name, isStudent = false) {
  this.name = name;
  this.isStudent = isStudent;
}

let user = new User("George", true);

console.log("user name", user.name);
console.log("is student", user.isStudent);

user.writeExam = function () {
  console.log(`Student ${this.name} is ready for my exam`);
};

user.writeExam(); */

/* function User1(name, isStudent = false) {
  this.name = name;
  this.isStudent = isStudent;

  this.writeExam = function () {
    console.log(`Student ${this.name} is ready for my exam`);
  };
}

let user1 = new User1("George", true);
user1.writeExam();
 */

/* ობიექტის თვისებები */
/* const object1 = {
  property1: 42,
};

const descriptor1 = Object.getOwnPropertyDescriptor(object1, "property1");
console.log("descriptor1", descriptor1); // descriptor1 {value: 42, writable: true, enumerable: true, configurable: true}
console.log("descriptor1 type", typeof descriptor1); //descriptor1 type object
console.log('descriptor1.configurable',descriptor1.configurable);
console.log('descriptor1.value',descriptor1.value); */

/* ფროფერთის განსაზღვრა */

/* const student = {};
Object.defineProperty(student, "name", {
  value: "Nino",
  writable: false,
});

console.log(student.name); // Nino
student.name = "Liza"; // Uncaught TypeError: Cannot assign to read only property 'name' of object '#<Object>'
 */
/* ფროფერთის რედაქტირება */
/* let user = {
  name: "Nino",
};

Object.defineProperty(user, "name", {
  writable: false,
});

console.log(Object.getOwnPropertyDescriptor(user, "name")); */

/* ფროფერთი getters და setters */

/* let user = {
  name: "ana",
  lastName: "kiknadze",

  get fullName() {
    return `${this.name} ${this.lastName}`;
  },

  set fullName(fullName) {
    [this.name, this.lastName] = fullName.split(" ");
  },
};

console.log("user.fullName", user.fullName);
user.fullName = "Davit Oniani";
console.log("user.name", user.name);
console.log("user.lastName", user.lastName); */

/* onst obj = {
  log: ["a", "b", "c"],
  get latest() {
    return this.log[this.log.length - 1];
  },
  set latest(letter) {
    this.log.push(letter);
  },
};

console.log("obj.latest", obj.latest);
obj.latest = "D";
console.log("obj.latest", obj.latest); */

/* პროტოტიპი */

const Person = function (firstName, age) {
  this.firstName = firstName;
  this.age = age;
};

// ობიექტების შექმნა person-ის შექმნა
const person = new Person("თემო", 20);

console.log('person',person);

// პროტოტიპის მნიშვნელობის შემოწმება
console.log("Person.prototype", Person.prototype); // { ... }

// მეთოდი დამატება კონსტრუქტორის პროტოტიპში
Person.prototype.hey = function () {
  console.log(`სალამი ${this.firstName}`);
};

// Person კონსტრუქტორის პროტოტიპის მნიშვნელობა
console.log("Person.prototype)", Person.prototype); //{hey: ƒ, constructor: ƒ}
person.hey(); //სალამი თემო

// ფროფერთის დამატება კონსტრუქტორის პროტოტიპში
Person.prototype.species = "Homo Sapiens";
console.log("person.species", person.species); //Homo Sapiens

console.log(
  "Person.prototype.isPrototypeOf(person)",
  Person.prototype.isPrototypeOf(person)
); //true
console.log(
  "Person.prototype.isPrototypeOf(Person)",
  Person.prototype.isPrototypeOf(Person)
); //false

console.log(
  "person.__proto__ === Person.prototype",
  person.__proto__ === Person.prototype
); //true

console.log('person.species',person.species);
Person.prototype = { species: "ადამიანი" };

const person1 = new Person("გიგა", 20);
console.log('person.species',person.species);
console.log('person1.species',person1.species);

/* function sayHi() {
  console.log(`Hi, I'm ${this.name}`);
}

const user = { name: "Nino" };
sayHi.call(user); */
