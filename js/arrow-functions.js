let getName = function () {
  return "Jan";
};

let getName = () => "Jan";

let getObject = () => ({ firstName: "Jan" });

function args() {
  console.log(arguments);
}

args(1, 2, 3);

// variable arguments does not exists on arrow functions

let array = [1, 2, 22, 32, 12];

array.filter((value) => value > 20);

// Second lesson - Arrow functions i kontekst
let person = {
  firstName: "Jan",
  lastName: "Kowalski",
  sayHello() {
    setTimeout(() => {
      console.log(this.firstName + " " + this.lastName);
    }, 2000);
  },
};

// call, apply, bind
person.sayHello.call({ firstName: "Anna", lastName: "Nowak" });

let Person = (firstName) => {
  this.firstName = firstName;
};

person1 = new Person("Anna"); // Person is not a constructor
Person.prototype; // undefined

// Third lesson - Domyślne parametry
function multiply(number, multipleBy = 2) {
  return number * multipleBy;
}

// Lazy evaluation - right side is not called if first is true
true || false;

// Lesson 4 - Domyślne parametry i zmienna arguments
function multiplyBy(x, n = x) {
  "use scrict";

  console.log(arguments); // arguments does not count default values

  arguments[1] = 10; // with scrict mode we cannot change n also n = x works as strict mode

  return x * n;
}

// Lesson 5 - Nazwa funkcji i debugowanie
const getName = function name() {
  return "Jan";
};

// getName.name = name
