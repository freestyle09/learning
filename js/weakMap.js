// TODO: Lesson 4 - Korzystanie z weakMap

let person = {
  firstName: "Jan",
  lastName: "Kowalski",
};
let person2 = {
  firstName: "Anna",
  lastName: "Nowak",
};

let age = new WeakMap([
  [person, 32],
  [person2, 22],
]);

const Person = () => {
  const privateData = new WeakMap();

  return class Person {
    constructor(firstName, lastName) {
      privateData.set(this, { firstName, lastName });
    }

    sayHello() {
      const data = privateData.get(this);
      return `${data.firstName} ${data.lastName}`;
    }
  };
};

const person3 = new Person("Jan", "Kowalski");
console.log(person3.firstName); // undefined
console.log(person3.sayHello()); // Jan Kowalski
