// * Lesson 1 - Tworzenie Symboli
// Symbols are new primitive type in JS
// Symbols creates unique values
const hidden = Symbol("Ściśle tajne");

let person = {
  [hidden]: "#joasoja@#okasok223",
};

for (let key in person) {
  console.log(key); // This will not be visible here, so it's not 100% private
}
console.log(person[hidden]);

const FORMAT = Symbol("format()");

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHello() {
    return this[FORMAT](`Hello ${this.firstName} ${this.lastName}!`);
  }

  [FORMAT](text) {
    return text.toUpperCase();
  }
}

let person1 = new Person("Jan", "Kowalski");

// Lesson 2 - Metody Symboli
const hidden = Symbol("hidden"); // Global, but instead of this scope we can use:
Symbol.for("hidden");
const person = {
  [Symbol.for("hidden")]: "jakieś_hasło",
  getSecret() {
    return this.Symbol.for("hidden");
  },
};

Symbol.keyFor(hidden);
Object.getOwnPropertyNames(person); // Symbols hidden
Object.getOwnPropertySymbols(person); // [Symbol(hidden)]

// Lesson 3 - Well known Symbols (Symbole wbudowane)

// All well known Symbols
// Symbol.hasInstance();
// Symbol.toPrimitive();
// Symbol.toStringTag();
// Symbol.isConcatSpreadable();
// Symbol.species();
// Symbol.match();
// Symbol.replace();
// Symbol.search();
// Symbol.split();
// Symbol.unscopables();
// Symbol.iterator(); // Most usable

class Person {
  constructor(firstName, lastName) {
    if (new.target === "Person") {
      throw new Error("Class Person cannot be used diretcly");
    }

    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHello() {
    return `${this.firstName} ${this.lastName}`;
  }

  // That metods checks if someone has written obj instanceof Person
  static [Symbol.hasInstance](obj) {
    return false;
  }
  // Instead of [object Object]
  get [Symbol.toStringTag]() {
    return Person; // Returns [object Person]
  }

  // When js tries to convert obj to primitive value e.g. String
  // employee + "some string"
  [Symbol.toPrimitive]() {
    return this.sayHello();
  }
}

class Employee extends Person {
  constructor(firstName, lastName, position) {
    super(firstName, lastName);
    this.position = position;
  }
  sayHello() {
    return `Nazywam się ${super.sayHello()} i pracuję jako ${this.position}`;
  }

  static [Symbol.hasInstance](obj) {
    return obj.constructor === Employee;
  }
}

const employee = new Employee("Jan", "Kowalski", "programista");
