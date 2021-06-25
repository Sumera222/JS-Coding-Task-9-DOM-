//Reference of the First Div aka Targeted DIV
let element = document.getElementsByClassName("div-class")[0];
console.log(element);

//Changed Class Name
let b = element.className = "Changed-class";
console.log(b);

//Attribute Styling
element.style.color = "purple";
element.style.border = "5px solid blue";
document.body.style.backgroundColor = "lightblue";