// Bonfire: Mutations
// Challenge: http://www.freecodecamp.com/challenges/bonfire-mutations


function mutation(arr) {
  var word = arr[0].toLowerCase().split('');
  var letters = arr[1].toLowerCase().split('');

  for (var letter in letters) {
    x = 0;
    while (x < letters.join('').length ) {
      if (word.indexOf(letters[x]) < 0) {
        return false;
      }
      x +=1;
    }
  }

  return true;
}


mutation(["hello", "hey"]);
