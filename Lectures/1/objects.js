let blankObj = {};

let obj = {
    hello: "World",
    num: 1,
    bool: true,
    f: (message) => {
        return message;
    }
};

console.log(obj);

obj['new-key1'] = "I'm a new value";

obj['directlyAddedKey'] = '';
obj.directlyAddedKey = "I've been added";
console.log(obj);

let keyName = "PTestKey";
obj[keyName] = "Added!!";

obj[7] = 'Number key';
console.log(obj);

let obj2 = {a: 1, b: 2, c: 3};
let obj3 = {c: 3, a: 1, b: 2};

console.log(obj2 === obj3);

const constObj = {a: 1, b: 2, c: 3};

constObj.d = 'hello';
constObj.a = 2;

console.log(constObj);
