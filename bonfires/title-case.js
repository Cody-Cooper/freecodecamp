// Bonfire: Title Case a Sentence
// Challenge: http://www.freecodecamp.com/challenges/bonfire-title-case-a-sentence


function titleCase(str) {
    splitString = str.toLowerCase().split(' ');
    for (var position in splitString) {
        splitString[position] = splitString[position].charAt(0).toUpperCase() + splitString[position].substr(1);
        }
        return splitString.join(' ');
}

titleCase("I'm a little tea pot");
