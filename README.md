*What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: 
getElementById() It only works with the specific ID of the element.
GetElementsByClassName() works by the class name of the element.
querySelector() here if I take this class name .btn and if I have some few more classes named. Then it will catch only the first class item.
queryselector() and queryselectorall() here the class and id write system is the same like css.

*How do you create and insert a new element into the DOM?
Answer: 
//Here create p tag
let newParagraph =
document.createElement("p");
let parent = document.getElementById("parentDiv");
parent.appendChild(newParagraph);

*What is Event Bubbling and how does it work?
Answer: Event-bubbling is a dom event process. It start from target element  and go to parent element.

*What is Event Delegation in JavaScript? Why is it useful?
Answer: Event Delegation is a useful pattern that allows you to write cleaner code, and create fewer event listeners with similar logic.


*What is the difference between preventDefault() and stopPropagation() methods?
Answer: 
preventDefault() it stop event default behaviour but not stop Event bubbling.
stopPropagation() it stop event bubbling and capturing.
