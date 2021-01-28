// TODO: Lesson 2 - WeakSet
let person = {
  firstName: "Jan",
  lastName: "Kowalski",
};
let person2 = {
  firstName: "Anna",
  lastName: "Nowak",
};

let s = new WeakSet();
s.add(person);
s.add(person2);
s.add("Siema"); // Error
// To WeakSet we can add only objects
// Something inside weakSet is removed by GarbageCollector if reference is not being used

person = null;
console.log(s); // {...person2} - you know

