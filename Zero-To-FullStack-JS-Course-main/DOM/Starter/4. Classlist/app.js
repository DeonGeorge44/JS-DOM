// classlist
//---ClassList property allows us check all of the classes which a specific element has --------------------------------
const h1 = document.querySelector(".main-head");
console.log(h1.classList);

// add()--it is a method in classList property that adds a class to an element
const h2 = document.querySelector("h2");
h2.classList.add("styles");
console.log(h2.classList);

// remove()-- The Remove Property in DOM is used to remove an element from the Document.
const p = document.querySelector("p");
p.classList.remove("styles");
console.log(h2.classList);

//toggle()
/* toggle() -- The Toggle() Method in classList is used to toggle a class on an element.If the class is present,it will be removed
               while if the class is not present,it will be added.
*/
p.classList.toggle("toggled");
console.log(p.classList);
