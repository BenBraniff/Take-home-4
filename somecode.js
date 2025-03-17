function findQuote() {
  const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Do what you can, with what you have, where you are.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Happiness depends upon ourselves.",
    "Act as if what you do makes a difference. It does.",
    "Life is what happens when you're busy making other plans.",
    "You only live once, but if you do it right, once is enough.",
    "Not all those who wander are lost.",
    "The purpose of our lives is to be happy.",
    "Simplicity is the ultimate sophistication.",
  ];

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let randomInt = getRandomInt(0, 9);

  alert(quotes[randomInt]);
}

// let number = 3;

// if (number == 0) {
//     let number2 = 4;
//     number2 = 5;

// }

// number2 = 3;

// function func1 () {
//     var numberVar = 0;

// }

// numberVar = 1;

// if(number == 0) {
//   const numberConst = 0;
//   numberConst = 10; // TypeError: Assignment to constant variable
// }

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((num) => {
//   console.log(num * 2); // output = 2 4 6 8 10
// });

// const doubledNumbers = numbers.map((num) => num * 2);
// console.log(doubledNumbers); // output = [2, 4, 6, 8, 10]

// const evenNumbers = numbers.filter((num) => num % 2 === 0);
// console.log(evenNumbers); // output = [2, 4]

// const multiply = (x, y) => x * y;
// console.log(multiply(4, 5)); // Output: 20
