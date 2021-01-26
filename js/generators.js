//  TODO: Lesson 1 - Tworzenie generatorów
// Generators returns iterators
function* it() {
  //  TODO: First example
  // yield 1;
  // yield 2;
  // yield 3;

  // TODO: Second example
  for (let i = 0; i <= 50; i++) {
    yield i;
  }
}

// Yield stops running the program before "next" function is running again

let iterator = it();
//  TODO: First example
// Next is by default
iterator.next(); // {value: 1, done: false}
iterator.next(); // {value: 2, done: false}
iterator.next(); // {value: 3, done: false}
iterator.next(); // {value: undefined, done: true}

//  TODO: Second example
iterator.next(); // {value: 1, done: false}

for (let value of iterator) {
  console.log(value); // 1 ... 50 until done is true
}

const it = {
  *[Symbol.iterator]() {
    const numbers = [1, 2, 3, 44, 5];

    for (let number of numbers) {
      yield number;
    }
  },
};

for (let value of it) {
  // We don't need to write it[Symbol.iterator()] because JS will call this by default
  console.log(value); // 1, 2, 3, 44, 5
}

function* range(from, to) {
  while (from <= to) {
    yield from++;
  }
}

for (let value of range(10, 50)) {
  console.log(value); // 10, 11 ,12 ... 50
}

// TODO: Lesson 2 - Przekazywanie wartości
// TODO: Lesson 3 - Obsługa błędów

function* it(number) {
  let result = (yield) + number * 2;
  yield result;
}

const iterator = it();

iterator.next(); // value: undefined
iterator.next(2); // value: 12

function ajax(url) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  return xhr;
}

function makeRequest(url, gen) {
  let it = gen(url);
  let xhr = it.next().value;
  xhr.onload = function () {
    if (xhr.status === 200) {
      it.next(xhr.responseText);
    }
  };
  xhr.onerror = function () {
    it.throw(new Error("Wystąpił błąd"));
  };
  xhr.send();
}

function* showData(url) {
  try {
    let result = yield ajax(url);
    document.querySelector("#selector").textContent = result;
  } catch (e) {
    //    something
  }
}

makeRequest("https://google.pl", showData);

// TODO: Lesson 4 - Zwracanie z generatora

function* getRandom() {
  while (true) {
    yield Math.floor(Math.random() * 100) + 1;
  }
}

let iterator = getRandom();
let randomNumbers = [];

for (let value of iterator) {
  randomNumbers.push(value);
  if (randomNumbers.length === 10) {
    iterator.return();
  }
}

console.log(randomNumbers);

// Lesson 5 - Delegowanie generatorów

function* gen() {
  yield 1;
  yield* [2, 3, 4];
  yield 5;
}

for (let value of gen) {
  console.log(value); // 1, 2, 3, 4, 5 without * is 1, [2,3,4], 5
}

class Model {
  constructor() {
    this.models = [];
  }

  *[Symbol.iterator]() {
    yield* this.models;
  }
}
