//parent element

const li = document.querySelector("li");
console.log(li.parentElement);

//
console.log(li.parentElement.parentElement);
console.log(li.parentElement.parentElement.parentElement);
console.log(li.parentElement.parentElement.parentElement.parentElement);

//child element
const ul = document.querySelector("ul");
console.log(ul.children);
console.log(ul.children[0]);
console.log(ul.children[1]);
console.log(ul.children[2]);
console.log(ul.children[3]);

//
console.log(ul.nextElementSibling);
console.log(ul.nextElementSibling.textContent);
console.log(li.nextElementSibling.nextElementSibling.textContent);

//
const fourthLi = document.querySelector(".fourth");
console.log(fourthLi.previousElementSibling);
console.log(fourthLi.previousElementSibling.previousElementSibling);
