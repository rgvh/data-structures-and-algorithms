'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

Write a function named isNum that takes in a string or number of any length. This function should use a regular expression pattern to return true if the input contains a number, and false if the input does not contain a number.

For example:
12345 returns true
'12345' returns true
'h3llo world' returns true
'hello world' returns false
------------------------------------------------------------------------------------------------ */

const isNum = (input) => {
  let validator = /\d/g;
  return validator.test(input);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named isCapitalized that takes in a string. This function should use a regular expression pattern to match all words that begin with a capital letter.

Return an array containing all the matches.
------------------------------------------------------------------------------------------------ */
const sampleStr = ('We only want to Return the Words that begin With a capital Letter');


const isCapitalized = (str) => {
  const array = str.match(/[A-Z][\w]*/g);
  return array;
};
// console.log(isCapitalized(sampleStr));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named citiesAtoJ that takes in an array of city names and uses a regular expression pattern to return a new array containing any cities that begin with the letters A through J, inclusive.
------------------------------------------------------------------------------------------------ */

let cities = ['Cleveland', 'San Diego', 'Birmingham', 'Seattle', 'Miami', 'New York City', 'Omaha', 'Portland', 'Austin', 'Boston', 'Newport Beach', 'Hoboken'];

const citiesAtoJ = (arr) => {
  // arr.forEach(element, idx) => {
    
  });
  // const noSpaces = arr.replace(/\s\b/g, '');
  // const newArray = noSpaces.match(/[A-Z][\w]*/g);
  // return newArray;
};
// console.log(citiesAtoJ(cities))
/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

You have created a game application and begin by asking users an easy question: In which month is Halloween?

Write a function named matchMonth which uses a regular expression pattern to match any of these inputs: October, Oct, october, oct

If the user enters any of these four inputs, return true. For any other input, return false.

Do not use the vertical bar (pipe) in your pattern.
------------------------------------------------------------------------------------------------ */

const matchMonth = (input) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named noPunctuation that contains a regular expression pattern to find all of the words that contain a space immediately at the end of the word. Return an array of all such words, still containing the space at the end.

For example, if given the string "Hello, and have a wonderful day!", the word "Hello, " would not be returned because it is immediately followed by a comma. The word "day!" would not be returned because it is immediately followed by an exclamation point.

The expected output of "Hello, and have a wonderful day!" is ["and ", "have ", "a ", "wonderful "].
------------------------------------------------------------------------------------------------ */

const noPunctuation = str => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6

You want to teach a friend how to play hangman and want to show them using a partially complete puzzle.

Write a function named hangman which uses the replace method to remove all of the vowels (a, e, i, o, u) from the hangman string and replace them with an underscore.

The function should return a string containing the consonants in their original positions and underscores where the vowels were previously located.

For example, 'Welcome to Code 301!' will return 'W_lc_m_ t_ C_d_ 301!'.
------------------------------------------------------------------------------------------------ */
let sampleString = 'This is a regex challenge. We are trying to create a hangman phrase where all of the vowels are missing!'

let hangman = (str) => {
  let removeVowels = str.replace(/[aeiou])/g, '_');
  return removeVowels;
};
console.log(sampleStr(removeVowels));
/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

Write a function named findShells that takes in the string below and uses a regular expression pattern to find all instances of the following words: "sells", "shells", "seashells".

Do not use the vertical bar (pipe) character.

Hint: All of these words end with the letters "ells".
------------------------------------------------------------------------------------------------ */

const seashells = 'She sells seashells by the seashore. The shells she sells are surely seashells. So if she sells shells on the seashore, I\'m sure she sells seashore shells.';

const findShells = (str) => {
  // Solution code here...
};
