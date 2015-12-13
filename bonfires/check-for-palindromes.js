// Bonfire: Check for Palindromes
// Challenge: http://www.freecodecamp.com/challenges/bonfire-check-for-palindromes


function palindrome(str) {
  string = str.toLowerCase().replace(/[\W_]/g, '');
  reversedString = string.split('').reverse().join('');

  return string === reversedString;
}

palindrome("eye");
