let strArray = ["hello", "world", "my", "name", "is", "audie"];
let numArray = [1, 2, 3, 4, 5];
let mixArray = [1, "two", undefined, true, (message) => {return message}];

console.log(mixArray[4](5));

strArray.forEach( (elem) => {
    console.log(elem);
});

let squared = numArray.map((x) => {
    return x*x;
});

console.log(squared);

let oddNums = numArray.filter((num) => {
    return num%2 === 1;
});

numArray.push(6);

console.log(numArray);

console.log(numArray.pop());
console.log(numArray);
