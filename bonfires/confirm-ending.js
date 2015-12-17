// Bonfire: Confirm the Ending
// Challenge: http://www.freecodecamp.com/challenges/bonfire-confirm-the-ending

function end(str, target) {
  return str.substr((str.length - target.length)) === target;
}

end("Bastian", "n");
