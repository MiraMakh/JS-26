"use strict";

// მაგალითი
/* document.body.style.background = "pink";
setTimeout(() => (document.body.style.background = "blue"), 5000);
 */
//შევამოწმოთ სლაიდში მოწოდებული ინფორმაცია
// console.log('typeof document.body',typeof document.body); //object
// console.log('document.body',document.body); //object */
// console.log('document.body.style.background',document.body.style.background="#d10000"); //object */
// console.log('{document: document.body}', {document: document.body});
// console.log('document.body.childNodes', document.body.childNodes);

/* console.log(document.documentElement); 
console.log(document.head);  */

//კომენტარის წაკითხვა html ხიდან
/* let container = document.querySelector(".container");
let counter = 0;

console.log({ container }); // აუცილებლად ანახე
console.log(container);

for (let i = 0; i < container.childNodes.length; i++) {
  let el = container.childNodes[i];
  console.log('{el}',{el});
  console.log('el',el);
  console.log('el.nodeType', el.nodeType);

  if (el.nodeType === 8) {
    console.log('if (e.nodeType === 8)', el);
    counter += 1;
  }
} */
/* console.log(counter); */

/* 
  DOM-ში ნავიგაცია
*/

/* console.log("document.documentElement", document.documentElement);
console.log(document.documentElement);
 */
/* console.log("document.body");
const body = document.body;
console.log({ body: document.body });

console.log("document.head");
console.log(document.head); */

/* 
  childNodes, firstChild, lastChild 
  ნოუდები ობიექტში
*/
/* console.log(document.body?.firstChild); //#text
console.log(document.body.lastChild); //<script src="script.js"></script>
for (let i = 0; i < document.body.childNodes.length; i++) {
  console.log(
    `document body child number ${i} is ${document.body.childNodes[i].nodeName} `
  );
} */

/* console.log("document.body.childNodes", document.body.childNodes);
for (let prop in document.body.childNodes) {
  console.log(prop);
} */

/* for (let node of document.body.childNodes) {
  console.log(node);
}

console.log(Array.from(document.body.childNodes)); */

/* 
  Element
*/

/* for (let el of document.body.children) {
  console.log(el);
} */

/* console.log(document.documentElement.parentElement);
console.log(document.body.parentElement); */

/* 
  ელემენტების შერჩევა
*/

/* let elem = document.getElementById("elem");
elem.style.background = "red";

console.log('elem', elem) */

/* let menu = document.getElementById("menu");
let items = menu.getElementsByClassName("item");
let className = menu.getElementsByClassName("item")[0]?.className;
let item = menu.getElementsByClassName("item")[0].textContent;

console.log("items", items);
console.log("items.length", items.length);
console.log("className", className);

const listItems = document.querySelectorAll("li");
for (let elem of listItems) {
  if (elem.matches(".highlight")) {
    console.log("The archive reference: ", elem);
  }
}
 */
/* HTML ატრიბუტები */
/* const elem = document.getElementById("elem");
console.log(elem.getAttribute("About"));

elem.setAttribute("Test", 123);

console.log("outerHTML", elem.outerHTML);
console.log("innerHTML", elem.innerHTML);

for (let attr of elem.attributes) {
  console.log(`${attr.name} = ${attr.value}`);
} */

/* HTML თვისებები/properties*/

/*
innerHTML, outerHTML, textContent, hidden
 */
/* const elem = document.getElementById("elem");
elem.hidden = true;
elem.innerHTML = "აკუნა მატატა";
elem.textContent = "<div>test</div>"; */

/* id="elem" ანახე */
/* elem.outerHTML = "<div>new div</div>"; */

/* 
  დოკუმენტის შეცვლა
*/
/* // 1. <div>-ის შექმნა
let div = document.createElement("div");
// 2. დივზე კლასის დამატება
div.className = "message";

// 3. div-ში ინფორმაციის ჩაწერა
div.innerHTML =
  "<strong>გაფრთხილება</strong> თქვენს დოკუმენტში დაემატა ახალ საყურადღებო მესიჯი";
// 4. შექმნილი div-ი თავისი შიგთავსით იწერება დოკუმენტში
document.body.append(div);
 */

/* let computedStyle = getComputedStyle(document.body);

console.log(computedStyle.backgroundColor);
console.log(computedStyle); */

// function createNotification(messageText, type) {
//   console.log("function was up");
//   console.log("messageText", messageText);
//   console.log("type", type);
//   // 1. კონტეინერის მოძებნა დოკუმენტში
//   const container = document.getElementById("notification-container");

//   // 2. ახალი <div> ელემენტის შექმნა
//   const toast = document.createElement("div");

//   // 3. კლასების დამატება (მაგ: "toast success" ან "toast danger")
//   toast.className = `toast ${type}`;

//   // 4. ტექსტის და დახურვის ღილაკის ჩასმა HTML-ით
//   toast.innerHTML = `
//         <span>${messageText}</span>
//         <button class="close-btn">&times;</button>
//       `;
//   // container.innerHTML = `
//   //       <span>${messageText}</span>
//   //       <button class="close-btn">&times;</button>
//   //     `;

//   // 5. დახურვის ღილაკზე მოვლენის (Event) მიბმა
//   const closeBtn = toast.querySelector(".close-btn");
//   closeBtn.addEventListener("click", () => {
//     toast.remove(); // ელემენტის წაშლა DOM-იდან
//   });

//   // 6. ავტომატური წაშლა 4 წამის (4000 მლწ) შემდეგ
//   setTimeout(() => {
//     if (toast.parentElement) {
//       toast.remove();
//     }
//   }, 4000);

//   // container.innerHTML = `${{ ...toast }}`;
//   // 7. შექმნილი Toast-ის ჩასმა კონტეინერში
//   container.append(toast);
// }
