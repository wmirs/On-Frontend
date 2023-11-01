// const person = new Object();
// person.name = "Remilia Scarlet";
// person.age = 18;
// person.friends = ["Flandre Scarlet", "Cirno", "Sakura"];
// person.sayHello = function() {
//   console.log("Hello, " + this.name + "!");
// };

// person.sayHello();

// const person = {
//   name: "RemiliaScarlet",
//   age: 18,
//   sayName() {
//     console.log(`My name is ${this.name}.`)
//   }
// };
// Object.defineProperty(person, "name", {
//   value: "Cirno"
// })
// console.log(person)
// person.name="Flandre"
// console.log(person)


// const dest = {
//   id: 'dest'
// };
// const src = {
//   id: 'src'
// };
// const result = Object.assign(dest, src);
// console.log(result);
// console.log(dest);
// console.log(src);
// console.log(dest == src);
// console.log(dest === src);
// console.log(result == dest);
// console.log(result === dest);

// dest = {};
// Object.assign(dest, {a: 'foo'}, {b: 'bar'})
// console.log(dest)
// dest = {
//   set a(val) {
//     console.log(`Invoked dest setter with param ${val}`);
//   }
// };
// src = {
//   get a() {
//     console.log("Invoked src gettter");
//     return "Foo";
//   }
// }
// Object.assign(dest, src)

let person = {
  name: "RemiliaScarlet",
  age: 18,
  friends: ["Cirno", "FlandreScarlet"]
}

let {name: personName, age, job="Software Engineer"} = person
console.log(personName)
console.log(age)
console.log(job)

let pName, pAge;

({name: pName, age: pAge} = person);
console.log(pName);
console.log(pAge);