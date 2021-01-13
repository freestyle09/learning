// * Lesson 1 - Dekompozycja obiektów
let person = {
  firstName: "Jan",
  lastName: "Kowalski",
  age: 49,
};

let { firstName: fName, lastName, age } = person || {};

// * Lesson 2 - Dekompozycja tablic
const numbers = [10, 20, 30, 40, 50];

let [, second] = numbers || [];

console.log(second); // 20;

// Value swapping
let a = 1,
  b = 2;

[a, b] = [b, a];

// * Lesson 3 - Dekompozycja zagnieżdżonych struktur
let person = {
  firstName: "Jan",
  lastName: "Kowalski",
  age: 49,
  job: {
    name: "Programista",
    experience: 20,
  },
  favNumbers: {
    list: [7, 15, 22],
  },
};

let {
  firstName,
  age,
  job: { name },
  favNumbers: {
    list: [, second],
  },
} = person || {};

// * Lesson 4 - Domyślne wartości i operator rest
const numbers = [10, 20, 30, 40, 50];

let [first, second, ...rest] = numbers || [];

// * Lesson 5 - Dekompozycja parametrów funkcji
function setSliderSpeed({ speed, easing } = {}) {
  let slider = {};

  slider.speed = options.speed;
  slider.easing = options.easing;

  return slider;
}

const config = {
  autoPlay: true,
  speed: 1000,
  easing: "ease",
  pause: 2000,
  infinite: true,
};

setSliderSpeed(config);
