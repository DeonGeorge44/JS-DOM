// href
const a = document.querySelector("a");
console.log(a.href);
console.log((a.href = "www.youtube.com"));

// value
const input = document.querySelector("input");
console.log(input.value);

// type
console.log(input.type);

//
// console.log((input.value = "please type here"));
// console.log((input.type = "password"));\
// console.log((input.placeholder = "please provide a strong password"));

//getAttribute(attrName)
console.log(input.getAttribute("type"));
console.log(input.getAttribute("placeholder"));

//setAttribute(attrName, value)
console.log(input.setAttribute("placeholder", "password"));
console.log(input.setAttribute("type", "password"));
