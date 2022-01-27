function globalFunction() {
    console.log("I'm a global function.");
}

globalFunction();

function printThisMessage(message) {
    console.log("Received a message");
    console.log(message);
}

printThisMessage("hi");

let doubleUpAnonymous = function(x) {
    return x*2;
};

console.log(doubleUpAnonymous(5));

let addToTheNumber = (num) => {
    let numToAdd = num;

    return (addThisMuch) => {
        return numToAdd + addThisMuch;
    };
};

let addToTwelve = addToTheNumber(12);
console.log(addToTwelve);
console.log(addToTwelve(8));

function haveAnInnerFunction() {
    function innerFunction() {
        return "Hello, im the inners";
    }
    return innerFunction();
}

console.log(haveAnInnerFunction());