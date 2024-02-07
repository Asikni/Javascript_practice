const fruits = ["Banana", "Orange", "Apple", "Mango","grapes"];

function myFunction(value) {
    text += "<li>" + value + "</li>";
  }

let text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

document.getElementById("demo").innerHTML = text;

fruits.shift();
document.getElementById("demo2").innerHTML = fruits;

fruits.unshift("lemon");
fruits[0] = "guava"
fruits[8] = "tomato"
document.getElementById("demo3").innerHTML = fruits

const myGirls = ["Cecilie", "Lone", "Linus"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);

document.getElementById("demo4").innerHTML = myChildren;