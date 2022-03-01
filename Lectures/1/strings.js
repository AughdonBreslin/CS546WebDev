const constString = "I am a constant, I cannot be changed, I'm free as a bird.";

console.log(constString);

/* Errors Out
constString = "I'm not allowed";
console.log(constString); */

let letString = 'I am a string that can be changed';

console.log(letString);

letString = "New string";
console.log(letString);
// letString = 5;
console.log(letString);

// Should not be a valid string in our applications
let blankSpaceString = "              ";
// blankSpaceString = "       Audie   ";

console.log(blankSpaceString.length);
console.log(blankSpaceString.trim().length);

var varString = "I am a var string.";

console.log(varString);

varString = "new var";
console.log(varString);

let concatString = letString+ ' ' +varString;

console.log(concatString);

console.log(letString.concat(' ' +varString));

concatString = `
    I am letString: ${letString}, 

    I am varString: ${varString}.
    `;

console.log(concatString);

myString1 = 'Hello there, How are you? My name is Aughdon Breslin.';

console.log(myString1.split(' '));