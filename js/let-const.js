(function () {
  // Let variables are not hoisted
  console.log(firstName); // firstName is not defined
  let firstName = "Józef";

  if (true) {
    let lastName = "Kowalski";
  }
  console.log(lastName); // Last name is not defined

  //   TDZ - Temporal Dead Zone
  //   typeof is the only one operator that returns undefined when variable is not defined
  console.log(typeof lastName);
  //   But when whenever in the code we defined lastName variable it throws an Error because
  // everything over let and const variables are called TDZ

  let lastName = "Kowalski";

  //   Const
  const person = {
    firstName: "Jan",
    lastName: "Kowalski",
  };

  person = {}; // Assignment to constant variable

  //   Global variables
  let animal = "Kurczak";
  //   By creating a variables using let or const keywords we are not assign them to global object window
})();
