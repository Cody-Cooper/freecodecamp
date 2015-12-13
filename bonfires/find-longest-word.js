// Bonfire: Find the Longest Word in a String
// Challenge: http://www.freecodecamp.com/challenges/bonfire-find-the-longest-word-in-a-string

function findLongestWord(str) {
  var words = str.split(' ');
  var longestWord = 0;

   words.forEach(function(word) {
    if (word.length > longestWord) {
      longestWord = word.length;
    }
  });

  return longestWord;
}

findLongestWord('The quick brown fox jumped over the lazy dog');
