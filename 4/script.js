"use strict"; /* ანახე */

// ივენთბის დამუშავება
/* let counter = 0;
function handleClick() {
  counter++;
  console.log(`თქვენ გამოიძახეთ handleClick ფუქცია ${counter}-ჯერ `);
}

const domEl = document.getElementById("dom-property");
domEl.onclick = function () {
  console.log("Click handler with DOM property");
};

domEl.addEventListener("click", () => {
  console.log("Click handler with DOM property");
}); */
/* const domEl = document.getElementById("dom-property");
console.log('domEl', domEl)
console.log('domEl', {domEl})
domEl.addEventListener(
  "click",
  (event) => {
    console.log("event", event);
    console.log("event.type", event.type);
    console.log("event.clientX", event.clientX);
    console.log("event.target", event.target);
    console.log("event target", { target: event.target });
  },
  
); */

/* function handleEvent(event) {
  console.log(`ივენთის ტიპი არის: ${event.type}`);
}

domEl.addEventListener("click", handleEvent);

window.addEventListener("mousemove", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = Math.random();
}

function removeHandler() {
  window.removeEventListener("mousemove", myFunction);
} */

/* 
  Capturing/დაჭერა
  Bubbling/ბუშტუკების
*/
/* for (let elem of document.querySelectorAll("*")) {
  elem.addEventListener(
    "click",
    () => console.log(`Capturing: ${elem.tagName}`),
    true
  );
  elem.addEventListener("click", (e) => {
    console.log(`Bubbling: ${elem.tagName}`);
    console.log("e", e);
  });
} */

/* მაუსის ივენთები */

/* document.addEventListener("contextmenu", (event) => {
  console.log("contextmenu", event);
});
document.addEventListener("click", (event) => {
  console.log("click", event);
}); */

/* const movingDiv = document.getElementById("movingDiv");

movingDiv.onmousedown = function (event) {
  let shiftX = event.clientX - movingDiv.getBoundingClientRect().left;
  let shiftY = event.clientY - movingDiv.getBoundingClientRect().top;
  console.log("clientX", event.clientX);
  console.log("clientY", event.clientY);
  movingDiv.style.position = "absolute";
  movingDiv.style.zIndex = 1000;
  document.body.append(movingDiv);

  moveToNewPosition(event.pageX, event.pageY);

  function moveToNewPosition(pageX, pageY) {
    movingDiv.style.left = pageX - shiftX + "px";
    movingDiv.style.top = pageY - shiftY + "px";
  }

  function onMove(event) {
    moveToNewPosition(event.pageX, event.pageY);
  }

  document.addEventListener("mousemove", onMove);

  movingDiv.onmouseup = function () {
    document.removeEventListener("mousemove", onMove);
    movingDiv.onmouseup = null;
  };
};
 */
/* კლავიატურის ივენთები */

// document.addEventListener("keydown", (event) => {});

// document.addEventListener("keypress", (event) => {});

// document.addEventListener("keyup", (event) => {});
/* document.addEventListener("keydown", function (event) {
  console.log("event", event);
  console.log("event.key", event.key);
  console.log("event.keyCode", event.keyCode);
  console.log("event.which", event.which);
  console.log("event.code", event.code);
}); */
/* გატესტეთ */
/* document.addEventListener("keypress", function (event) {
  console.log("event.key", event.key);
  console.log("event.code", event.code);
}); */

/* დოკუმენტის გადახვევა */
/* window.addEventListener("scroll", (event) => {
  console.log(event);
  console.log(window.scrollY);
}); */

/* DOMContentLoaded, load, beforeunload */
// function ready() {
//   console.log("DOM is ready");
//   console.log("DOM is ready", getComputedStyle(document.body).marginTop);
//   console.log("DOM is ready", getComputedStyle(document.body).backgroundColor);
// }

// document.addEventListener("DOMContentLoaded", ready);

// window.onload = function () {
//   // window.addEventListener('load', (event) => {}
//   console.log("Page loaded");
// };

// let analyticsData = {
//   test: "test property",
// };

// window.addEventListener("unload", function (event) {
//   console.log("analytics", JSON.stringify(analyticsData));
// });

// window.addEventListener("beforeunload", (event) => {
//   console.log("There are unsaved changes. Leave now?");
// });

// ფორმის თვისებები და მეთოდები

/* console.log("document.forms", document.forms);

console.log("document.forms.contactForm", document.forms.contactForm);

console.log("document.forms[0]", document.forms[0]);
console.log(" document.forms[0].name", document.forms[0].name);
console.log("document.forms[0].elements", document.forms[0].elements); */

const form = document.forms.contactForm;
/* console.log("form.elements", form.elements);
console.log("form.elements.firstName", form.elements.firstName);
console.log("form.firstName", form.firstName);
console.log(
  "form.elements.firstName === form.firstName",
  form.elements.firstName === form.firstName
);
console.log("form.LastName.placeholder", form.LastName.placeholder);
console.log("form.LastName.value", form.LastName.value);
console.log("form.gender.value", form.gender.value); */

/* form.firstName.value = "ახალი სახელი";
form.LastName.value = "ახალალი გვარი";
console.log("form.gender", form.gender);
form.gender[0].checked = true;  */

/* form.select.options[2].selected = true;
form.select.selectedIndex = 2;
form.select.value = "ბორჯომი";
console.log('form.select', form.select)
console.log('form.select.selectedIndex', form.select.selectedIndex)
console.log('form.select.value', form.select.value) */

/* multiple select */
/* let selected = Array.from(classicMusic.options)
  .filter((option) => option.selected)
  .map((option) => option.value);
console.log("selected", selected); */

/* let option = new Option("Text", "value", true, true);
classicMusic.appendChild(option); */

/* focus/blur */
/* email.onblur = function () {
  console.log("email.value", email.value);

  if (!email.value.includes("@")) {
    email.classList.add("invalid");
    error.innerHTML = "გთხოვთ შეიყვანეთ სწორი ელ. ფოსტა";
    console.log("error", error);
  }
}; */
/* email.addEventListener('blur', ()=>{})
 */
/* email.onfocus = function () {
  console.log("email.classList", email.classList);
  if (this.classList.contains("invalid")) {
    this.classList.remove("invalid");
    error.innerHTML = "";
  }
}; */

/* email.addEventListener("focus", () => {
  form.classList.add("focused");
  console.log("focused");
});

email.addEventListener("blur", () => {
  form.classList.remove("focused");
  console.log("blur");
}); */

/* change, input, cut, copy, paste */

/*form.firstName.onchange = function () {
   console.log("onchange firstName", form.firstName.value);
};

form.firstName.oninput = function () {
  console.log("oninput firstName", form.firstName.value);
}; */

/* form.LastName.onpaste = function (event) {
  console.log('even', event)
  console.log("paste: " + event.clipboardData.getData("text/plain"));
  event.preventDefault();
};

form.LastName.oncut = form.LastName.oncopy = function (event) {
  console.log(event.type + "-" + document.getSelection());
  event.preventDefault();
};
 */