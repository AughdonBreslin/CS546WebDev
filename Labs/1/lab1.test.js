const lab1 = require("./lab1");

console.log("Question 1:")
console.log(lab1.questionOne([-1,-2,-3])); 
console.log(lab1.questionOne([5,3,10]));
console.log(lab1.questionOne([2,1,2])); 
console.log(lab1.questionOne([5,10,9]));
console.log(lab1.questionOne([]));

console.log("Question 2:")
console.log(lab1.questionTwo(-999));
console.log(lab1.questionTwo(-5));
console.log(lab1.questionTwo(0));
console.log(lab1.questionTwo(1));
console.log(lab1.questionTwo(2));
console.log(lab1.questionTwo(7));
console.log(lab1.questionTwo(20));

console.log("Question 3:")
console.log(lab1.questionThree("Mr. and Mrs. Dursley, of number four, Privet Drive, were  proud  to  say  that  they  were  perfectly  normal,  thank you  very  much. They  were  the  last  people  youd  expect  to  be  involved in anything strange or mysterious, because they just didn't hold with such nonsense. \n Mr. Dursley was the director of a firm called Grunnings, which  made  drills.  He  was  a  big,  beefy  man  with  hardly  any  neck,  although he did have a very large mustache. Mrs. Dursley was thin and blonde and had nearly twice the usual amount of neck, which came in very useful as she spent so much of her time craning over garden fences, spying on the neighbors. The Dursleys had a small son  called  Dudley  and  in  their  opinion  there  was no finer boy anywhere.")); 
console.log(lab1.questionThree(""));
console.log(lab1.questionThree("rhythm"));
console.log(lab1.questionThree("a"));
console.log(lab1.questionThree("aeiouuoiea"));

console.log("Question 4:")
console.log(lab1.questionFour(10));
console.log(lab1.questionFour(-999));
console.log(lab1.questionFour(-5));
console.log(lab1.questionFour(0));
console.log(lab1.questionFour(1));
console.log(lab1.questionFour(2));
console.log(lab1.questionFour(5));
console.log(lab1.questionFour(20));