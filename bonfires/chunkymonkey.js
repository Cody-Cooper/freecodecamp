// Bonfire: Chunky Monkey
// Challenge: http://www.freecodecamp.com/challenges/bonfire-chunky-monkey


function chunk(arr, size) {
    var monk = [];
    while(arr.length) {
        monk.push(arr.splice(0, size));
    }
  return monk;
}

chunk(["a", "b", "c", "d"], 2);
