// Bonfire: Truncate a string
// Challenge: http://www.freecodecamp.com/challenges/bonfire-truncate-a-string


function truncate(str, num) {
  if (str.length > num){
    if (num < 3) {
      return str.substr(0, num) + '...';
    } else {
      return str.substr(0, (num - 3)) + '...';
    }
  } else {
    return str;
  }
}

truncate("A-tisket a-tasket A green and yellow basket", 11);
