const fruits = ["Banana", "Orange", "Apple", "Mango","grapes"];

function myFunction(value) {
    text += "<li>" + value + "</li>";
  }

let text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

document.getElementById("demo").innerHTML = text;

fruits.shift();

text = "<ul>";
fruits.forEach(myFunction);

text += "</ul>";


document.getElementById("demo2").innerHTML = text;




fruits.unshift("lemon")

fruits[0] = "guava"
fruits[8] = "tomato"

text = "<ul>"
fruits.forEach(myFunction)
text += "</ul>"
document.getElementById("demo3").innerHTML = text

const myGirls = ["Cecilie", "Lone", "Linus"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);

document.getElementById("demo4").innerHTML = myChildren;
console.log(document)

const demo4 = document.getElementById("demo4")

document.title = "mypage"
const myArray = [1,3,5,7,90,67,45]
const sqArray = myArray.map(myFunction2)

function myFunction2(value){
    return value * 2
}

document.getElementById("demo5").innerHTML = sqArray

function filterFunc(value){
    return value > 50

}

const over50 = myArray.filter(filterFunc)

document.getElementById("demo6").innerHTML = over50


switch (new Date().getDay()) {
    case 6:
      text = "Today is Saturday";
      break;
    case 0:
      text = "Today is Sunday";
      break;
    default:
      text = "Looking forward to the Weekend";
  }

  document.getElementById("demo7").innerHTML = text

  switch (new Date().getDay()) {
    case 4:
    case 5:
      text = "Soon it is Weekend";
      break;
    case 0:
    case 6:
      text = "It is Weekend";
      break;
    default:
      text = "Looking forward to the Weekend";
  }

  
  document.getElementById("demo8").innerHTML = text



  // Create a Map
const fruitsNew = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

document.getElementById("body").innerHTML = fruitsNew.get("apples");

try {
  alert("Welcome guest!");
}
catch(err) {
  document.getElementById("body").innerHTML = err.message;
}

try {
  aslert("Welcome guest!");
}
catch(err) {
  document.getElementById("body").innerHTML = err;
}



let num = 1;
try {
  num.toUpperCase();
}
catch(err) {
  document.getElementById("demo9").innerHTML = err.name;
}

try {
  eval("alert('Hello)");   // Missing ' will produce an error
}
catch(err) {
  document.getElementById("demow").innerHTML = err.name;
}

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const myCar = new Car("Ford", 2014);
document.getElementById("demor").innerHTML =
"My car is " + myCar.age() + " years old.";


class state{
  constructor(name , capital, year) {
    this.name = name;
    this.capital = capital;
    this.year = year
  }
  age(){
    const date = new Date();
    return date.getFullYear() - this.year
  }

  region(){
    if (this.year < 1975){
      return "old state"
    }
    else{
      return "new state"
    }
  }
}

const State = new state("J&K", "Srinagar", 1954);
document.getElementById("demot").innerHTML = State.region()
