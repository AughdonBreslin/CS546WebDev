// Aughdon Breslin
// Lab 1

const questionOne = function questionOne(arr) {
    // Sum of squares
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]**2
    }
    return sum
}

const questionTwo = function questionTwo(num) { 
    // Fibonacci
    if (num < 1) return 0;
    if (num == 1) return 1;
    return questionTwo(num-2) + questionTwo(num-1);
}

const questionThree = function questionThree(text) {
    // Count Vowels
    return text.match(/a/g).length
         + text.match(/e/g).length
         + text.match(/i/g).length
         + text.match(/o/g).length
         + text.match(/u/g).length;
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