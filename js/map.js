// TODO: Lesson 3 - Map

const map = new Map();
map.set("Anna", "Nowak"); // key => value

let person = {
  firstName: "Jan",
  lastName: "Kowalski",
};
let person2 = {
  firstName: "Anna",
  lastName: "Nowak",
};

let age = new Map([
  [person, 22],
  [person2, 32],
]);

age.get(person); // 22

// age.entries() - Returns keys values
// age.values() - Returns values
// age.keys() - Returns keys
for (let value of age) {
}
