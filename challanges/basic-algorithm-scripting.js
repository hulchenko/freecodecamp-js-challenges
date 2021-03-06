///////////////////////////////////////#1 Convert Celsius to FahrenheitPassed
function convertToF(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

convertToF(30);

///////////////////////////////////////#2 Reverse a StringPassed
function reverseString(str) {
  str = str.split('').reverse('').join('');
  return str;
}

reverseString('hello');
/////////////////////////////////////// #3 Factorialize a Number
function factorialize(num) {
  for (var result = 1; num > 0; num--) {
    result *= num;
  }
  return result;
}

factorialize(5);

///////////////////////////////////////#4 Find the Longest Word in a String
function findLongestWordLength(str) {
  var arr = str.split(' '); //split sentence to an array
  var longestWord = arr[0]; //assume longest word is the first word of an array
  for (var i = 0; i < arr.length; i++) {
    //iterate through array of words

    if (arr[i].length > longestWord.length) {
      //compare other words of an array if they are longer than the first one
      longestWord = arr[i];
    }
  }
  return longestWord.length; //return length of the longest word
}
findLongestWordLength('The quick brown fox jumped over the lazy dog');
///////////////////////////////////////#5 Return Largest Numbers in Arrays
function largestOfFour(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(Math.max(...arr[i]));
    {
    }
  }
  return newArr;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
///////////////////////////////////////#6 Check if a string (first argument, str) ends with the given target string (second argument, target).
function confirmEnding(str, target) {
  let num = target.length;
  let result = str.substring(str.length - num, str.length);
  if (result == target) {
    return true;
  } else {
    return false;
  }
}

confirmEnding('Bastian', 'n');
///////////////////////////////////////#7 Repeat a String
function repeatStringNumTimes(str, num) {
  let string = '';
  while (num > 0) {
    string += str;
    num--;
  }
  return string;
}

repeatStringNumTimes('abc', 3);
///////////////////////////////////////#8 Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
function truncateString(str, num) {
  let string = '';
  if (str.slice(0, num) == str) {
    return str;
  } else {
    let short = str.slice(0, num) + '...';
    return short;
  }
}

truncateString('A-tisket a-tasket A green and yellow basket', 8);
///////////////////////////////////////#9 Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'.
function findElement(arr, func) {
  return arr.find(func);
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);
//OR//
function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
  return undefined;
}

console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));
///////////////////////////////////////#10 Check if a value is classified as a boolean primitive. Return true or false.
function booWho(bool) {
  let test = typeof bool;
  return test === 'boolean' ? true : false;
}

booWho(null);
///////////////////////////////////////#11 Return the provided string with the first letter of each word capitalized.
function titleCase(str) {
  let arr = str.split(' ');
  let lowerCase = arr.map((i) => i.toLowerCase());
  let firstCap = lowerCase.map((i) =>
    i.replace(i.charAt(0), i.charAt(0).toUpperCase())
  );
  let arrJoin = firstCap.join(' ');
  return arrJoin;
}

titleCase("I'm a little tea pot");
///////////////////////////////////////#12 Copy each element of the first array into the second array, in order, starting at n index.
function frankenSplice(arr1, arr2, n) {
  let secondArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    secondArray.splice(n, 0, arr1[i]);
    n++;
  }
  return secondArray;
}
frankenSplice([1, 2, 3], [4, 5, 6], 1);
///////////////////////////////////////#13 Remove all falsy values from an array.
function bouncer(arr) {
  let copy = [];
  for (let i = 0; i < arr.length; i++) {
    if (Boolean(arr[i]) == true) {
      copy.push(arr[i]);
    }
  }
  return copy;
}

console.log(bouncer([7, 'ate', '', false, 9]));
///////////////////////////////////////#14 Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
function getIndexToIns(arr, num) {
  arr.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }
  return arr.length;
}

console.log(getIndexToIns([40, 60], 50));
///////////////////////////////////////#15 Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
function mutation(arr) {
  let arr1 = arr[0].toLowerCase();
  let arr2 = arr[1].toLowerCase();
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) < 0) return false;
  }
  return true;
}

console.log(mutation(['hello', 'hey']));
///////////////////////////////////////#16 Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
function chunkArrayInGroups(arr, size) {
  let secondArray = [];
  for (let i = 0; i < arr.length; i += size) {
    secondArray.push(arr.slice(i, i + size)); //starts at 0 and then increments by size number, thus giving us size of sub-arrays that we want
  }
  return secondArray;
}

console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2));
