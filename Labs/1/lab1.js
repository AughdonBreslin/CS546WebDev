// Aughdon Breslin
// Lab 1
// not sure what an npm dependency is so hopefully i didnt use it
// DONT NEED TO CHECK TYPE/parameter existence

const questionOne = function questionOne(arr) {
    // Sum of squares
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]**2;
    }
    return sum;
}

const questionTwo = function questionTwo(num) { 
    // Fibonacci
    if (num < 1) return 0;
    if (num == 1) return 1;
    return questionTwo(num-2) + questionTwo(num-1);
}

// referenced https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
const questionThree = function questionThree(text) {
    // Count Vowels
    let vowels = 0;
    // if theres a match (not null), add the number of matches
    if(text.match(/[aeiou]/gi)) vowels += text.match(/[aeiou]/gi).length;
    return vowels;
}

const questionFour = function questionFour(num) {
    // Factorial
    let prod = 1;
    if (num < 0) return NaN;
    if (num == 0) return 1;
    return num*questionFour(num-1);
}

module.exports = {
    firstName: "Aughdon", 
    lastName: "Breslin", 
    studentId: "10447694",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};