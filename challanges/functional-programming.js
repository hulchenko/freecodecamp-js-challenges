//#1 Call the getTea function to get 40 cups of tea for the team, and store them in the tea4TeamFCC variable.
// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';
/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4TeamFCC = getTea(40);

//#2 Prepare 27 cups of green tea and 13 cups of black tea and store them in tea4GreenTeamFCC and tea4BlackTeamFCC variables, respectively.
const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';

const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);

// Refactoring Global Variables Out of Functions:
// the global variable
var bookList = [
  'The Hound of the Baskervilles',
  'On The Electrodynamics of Moving Bodies',
  'Philosophiæ Naturalis Principia Mathematica',
  'Disquisitiones Arithmeticae',
];

/* This function should add a book to the list and return the list */
// New parameters should come before bookName

// Add your code below this line
function add(arr, bookName) {
  let newArr = [...arr]; // Copy the bookList array to a new array.
  newArr.push(bookName); // Add bookName parameter to the end of the new array.
  return newArr; // Return the new array.
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove(arr, bookName) {
  let newArr = [...arr]; // Copy the bookList array to a new array.
  if (newArr.indexOf(bookName) >= 0) {
    // Check whether the bookName parameter is in new array.
    newArr.splice(newArr.indexOf(bookName), 1); // Remove the given paramater from the new array.
    return newArr; // Return the new array.
  }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(
  add(bookList, 'A Brief History of Time'),
  'On The Electrodynamics of Moving Bodies'
);

//Map function manual alternative:
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
  var newArray = [];
  this.forEach((i) => newArray.push(callback(i)));
  //this = [23, 65, 98, 5]
  return newArray;
};

var new_s = s.myMap(function (item) {
  return item * 2;
});

//Filter function manual alternative:
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
  var newArray = [];
  this.forEach(function (item) {
    if (callback(item) === true) {
      newArray.push(item);
    }
  });
  return newArray;
};

var new_s = s.myFilter(function (item) {
  return item % 2 === 1;
});
console.log(new_s);

//Sort. Alphabetic order:
function alphabeticalOrder(arr) {
  return arr.sort(function (a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
  });
}
alphabeticalOrder(['a', 'd', 'c', 'a', 'z', 'g']);

//Every. Returns boolean. True if ALL true; false if at least 1 of them is not true:
function checkPositive(arr) {
  return arr.every(function (value) {
    return value > 0;
  });
}
checkPositive([1, 2, 3, -4, 5]);

//Some. Similar, returns if ANY value true/false

//Currying a function. If function cannot receive more than 1 argument, we can create functions within a function to imitate multiple arguments:
function add(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}
add(10)(20)(30);
