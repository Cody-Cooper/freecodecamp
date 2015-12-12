// Bonfire: Factorialize a Number
// Challenge: http://www.freecodecamp.com/challenges/bonfire-factorialize-a-number


function factorialize(num) {
  var factorial = 1;
  for (var n = 2; n <= num; n++) {
    factorial = factorial * n;
  }
  return factorial;
}

factorialize(5);
