// * Lesson 1 - Template Strings
let person = {
  firstName: "Jan",
  lastName: "Kowalski",
  age: 49,
};

let info = `Moje imię to \$ ${person.firstName} i nazwisko to ${person.lastName}, a mój wiek to ${person.age}`;

// * Lesson 2 - Funkcje tagujące

function formatPrice(strings, ...values) {
  console.log(strings); // ['Dodałeś do koszyka produkt: ','w cenie']
  console.log(values); // ["Plyta DVD", "1"]

  return "";
}
let product = {
  name: "Płyta DVD",
  price: 1,
};

let { name, price } = product;

let info = formatPrice`Dodałes do koszyka produkt: ${name} w cenie ${price}`;

// * Lesson 3 - Nowe metody dla stringów
const URL = "http://google.pl";

function isHTTPS(text) {
  // text.indexOf("https://") === 0; // 0 means begining 0 index
  text.startsWith("https://");
}

function hasExt(text, pattern) {
  /\.html&/.test(text);
  new RegExp("." + pattern + "$"); // ES5
  return text.endsWith(`.${pattern}`);
}

function includes(text, subString) {
  return text.indexOf(subString) !== -1;
  return text.includes(subString);
}

console.log("=".repeat(10));
