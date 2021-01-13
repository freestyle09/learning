// * Lesson 1 - Rest (it must be last parameter)

function calculate(type, ...args) {
  let args = [].slice.call(arguments, 1);

  console.log(args); // The same as above

  let calculations = {
    sum: (prevVal, val) => prevVal + val,
    multiply: (prevVal, val) => prevVal * val,
  };

  return args.reduce(calculations[type]);
}

calculate("sum", 2, 22, 33, 21, 12, 90, 25);

// * Lesson 2 - Spread

let numbers = [1, 2, 3, 4, 5, 6];

Math.max(...numbers);

const numbers2 = [100, 12, ...numbers, ..."Piotr"];
