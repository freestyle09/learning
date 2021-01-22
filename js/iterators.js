// TODO: Lesson 1 - Iterators
const it = function () {
  const numbers = [1, 2, 3, 4, 5];
  let index = 0;

  return {
    next: function () {
      return {
        done: index === numbers.length,
        value: numbers[index++],
      };
    },
  };
};

let iterator = it();

console.log(iterator.next()); // {done: false, value: 1}
console.log(iterator.next()); // {done: false, value: 2}
console.log(iterator.next()); // {done: false, value: 3}
console.log(iterator.next()); // {done: false, value: 4}
console.log(iterator.next()); // {done: false, value: 5}
console.log(iterator.next()); // {done: true, value: undefined}

for (let o = iterator.next(); o.done !== true; o = iterator.next()) {
  console.log(o.value);
}

// ES6
let it = {
  [Symbol.iterator]() {
    const numbers = [1, 2, 3, 4, 5];
    let index = 0;

    return {
      next: function () {
        return {
          done: index === numbers.length,
          value: numbers[index++],
        };
      },
    };
  },
};

const iterator = it[Symbol.iterator]();

for (let o = iterator.next(); o.done !== true; o = iterator.next()) {
  console.log(o.value);
}

// TODO: Lesson 2 - Pętla for ... of
// it - any object that contains inside [Symbol.iterator]

for (let value of it) {
  console.log(value);
}

for (let ch of "Józef") {
  console.log(ch); // Strings contains iterator
}

// TODO: Lesson 3 - Operator spread na iteratorach

console.log(Math.max(...it)); // Spread operator knows

// TODO: Lesson 4 - Dodawanie iteratora do klasy

class Model {
  constructor(data = {}) {
    this.data = data;
  }
  get(prop) {
    return this.data[prop];
  }
  set(prop, value) {
    return (this.data[prop] = value);
  }
}

class Collection {
  constructor(models) {
    this.models = [];
    if (Collection.hasIterator(models)) {
      this.populate(models);
    }
  }

  populate(models) {
    for (let model of models) {
      this.models.push(new Model(model));
    }
  }

  [Symbol.iterator]() {
    let models = this.models,
      index = 0;

    return {
      next() {
        return {
          done: index === models.length,
          value: models[index++],
        };
      },
    };
  }

  static hasIterator(obj) {
    return obj && typeof obj[Symbol.iterator()] === "function";
  }
}

const USERS = window.USERS; // TEMP

let users = new Collection(USERS);

[...users].filter((el) => el.get("email").endsWith(".biz"));
