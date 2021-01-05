const firstName = "Jan";
const lastName = "Kowalski";

const fnName = "getFullYear";

let person = {
  firstName,
  lastName,
  [fnName]() {
    // Concise methods
    // Syntactic Sugar
    return this.firstName + " " + this.lastName;
  },
};

// New methods
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.sayHello = function () {
  return this.firstName + " " + this.lastName;
};

let methods = {
  sayHello() {
    return (this.firstName + " " + this.lastName).toUpperCase();
  },
};

let person1 = new Person("Józef", "Rzadkosz");
let person2 = new Person("Anna", "Nowak");

Object.setPrototypeOf(person1, methods);

function slider(config) {
  let defaults = {
    speed: 500,
    pause: 3000,
    easing: "linear",
  };

  const options = {};

  Object.assign(options, defaults, config);
}

slider({
  easing: "linear-in-out",
  pause: 1000,
});

Object.is({}, {}); // false
Object.is(1, 1); // true
Object.is(-0, +0); // true
