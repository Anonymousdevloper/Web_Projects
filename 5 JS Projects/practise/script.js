var hop = document.getElementById("myHeading");
hop.innerHTML = "let's learn js ";
hop.style.color = "red";
hop.style.backgroundColor = "black";
const button = document.getElementById("increment");
let count = 0;
button.addEventListener("click", function () {
  let result = count++;
  document.getElementById("increment").innerText = result;
});

const button1 = document.getElementById("decrement");
let count1 = 0;
button1.addEventListener("click", function () {
  let result = count1--;
  document.getElementById("decrement").innerText = result;
});

class people {
  constructor(name, age) {
    this.age = age;
    this.name = name;
  }
  sayHi() {
    console.log(`hello my age is: ${this.age} and Name is: ${this.name}`);
  }
}
let person = new people("pan", 25);
person.sayHi();
