// Bonfire: Return Largest Numbers in Arrays
// Challenge: http://www.freecodecamp.com/challenges/bonfire-return-largest-numbers-in-arrays


function largestOfFour(arr) {
  return arr.map(function(number) {
    return Math.max.apply(null, number);
  });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
