function createPerson(name, age, job) {
  return {
    name: name,
    age: age,
    job: job,
    sayName() {
      console.log(`My name is ${name}.`)
    }
  };
}
const p1 = createPerson("Nicholas", 28, "Doctor");
const p2 = createPerson("Greg", 27, "Software Engineer");
console.log(p1);
console.log(p2);
p1.sayName();
p2.sayName();