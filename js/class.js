// * Lesson 1 - Tworzenie klas

// ES5
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.sayHello = function () {
  return `${this.firstName} ${this.lastName}`;
};

const person = new Person("Anna", "Nowak");

// ES6
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHello() {
    return `${this.firstName} ${this.lastName}`;
  }
}

Person.prototype.sayHello = function () {}; // Can be done

// * Lesson 2 - Dziedziczenie

// ES5
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.sayHello = function () {
  return `${this.firstName} ${this.lastName}`;
};

function Employee(firstName, lastName, position) {
  Person.call(this, firstName, lastName);
  this.position = position;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.sayHello = function () {
  const name = Person.prototype.sayHello.call(this);

  return `${name} + ${this.position}`;
};

const employee = new Employee("Jan", "Kowalski", "programista");

// ES6
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHello() {
    return `${this.firstName} + ${this.lastName}`;
  }
}

class Employee extends Person {
  constructor(firstName, lastName, position) {
    super(firstName, lastName); // When extends you must write super and super must be first
    this.position = position;
  }

  sayHello() {
    // Reassign sayHello method
    const name = super.sayHello();

    return `${name} i pracuję jako ${this.position}`;
  }
}

// * Lesson 3 - Dziedziczenie z wbudowanych typów
class Collection extends Array {
  constructor(...args) {
    super();
    if (args.length === 1) {
      super(1);
      this[0] = args[0];
    } else {
      super(...args);
    }
  }
}

const col = new Collection(10, 20, 30);

let colPart = col.slice(0, 1);

// * Lesson 4 - Metody statyczne
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHello() {
    return `${this.firstName} ${this.lastName}`;
  }

  static create({ fName: firstName, lName: lastName } = {}) {
    return new Person(firstName, lastName);
  }
}

// ? ES5
// Person.create = function (firstName, lastName) {
//   return new Person(firstName, lastName);
// };

const person = new Person("Józef", "Rzadkosz");

let json = `{
    "fName" : "Anna",
    "lName" : "Nowak"
}`;

const person2 = Person.create("Anna", "Kowalska");
const person3 = Person.create(JSON.parse(json));

// * Lesson 5 - Użycie super na obiektach

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHello() {
    return `${this.firstName} ${this.lastName}`;
  }

  static inherit(obj) {
    return Object.setPrototypeOf(obj, Person.prototype);
  }
}

const employee = {
  firstName: "Jan",
  lastName: "Kowalski",
  position: "programista",
  sayHello() {
    // let name = Object.getPrototypeOf(this).sayHello.call(this);

    return `Nazywam się ${super.sayHello()} i pracuję jako ${this.position}`;
  },
};

// ES5
Object.setPrototypeOf(employee, Person.prototype);
// ES6
Person.inherit(employee);

Person.prototype.sayHello.call(employee);

// * Lesson 6 - Ciekawostki odnośnie klas

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHello() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person("Anna", "Nowak");

for (let key in person) {
  console.log(key); // ? Created by Class = firstName, lastName - non enumerable
  // ? Created by Function = firstName, lastName, sayHello (prototype way) - Enumerable
}
