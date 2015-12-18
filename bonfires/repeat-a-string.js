// Bonfire: Repeat a string repeat a string
// Challenge: http://www.freecodecamp.com/challenges/bonfire-repeat-a-string-repeat-a-string


function repeat(str, num) {
  repeatedString = [];
  while (repeatedString.length < num) {
    repeatedString.push(str);
  }
  return repeatedString.join('');
}

repeat("abc", 3);
