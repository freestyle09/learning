// TODO: Lesson 1 - Set
let s = new Set();
s.size; // array.length
s.add("Piotr");
s.add("Siema");

s.delete("Piotr");
s.has("Siema"); // true
s.clear();

// new way
let person = {
  firstName: "Jan",
  lastName: "Kowalski",
};
let person2 = {
  firstName: "Anna",
  lastName: "Nowak",
};
let n = new Set([person, person2]);
n.has(person);
n.delete(person2);

n.forEach((value) => console.log(value));

const numbers = [1, 2, 1, 1, 1, 3, 3, 4, 1, 2, 1, 5, 7, 6];
const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};
removeDuplicates(numbers);
