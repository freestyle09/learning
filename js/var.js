// Hositing
(function () {
  console.log(firstName);
  var firstName = "Jan";

  //   This is equal to
  var firstName;
  firstName = "Jan";

  // Functions are hoisted
  console.log(getLastName());

  function getLastName() {
    return "Kowalski";
  }

  if (false) {
    var secondName = "Józef";
  }
  console.log(secondName);
})();

// Global variables
var animal = "Kotek";
// This is equal to
window.animal = "Kotek";
