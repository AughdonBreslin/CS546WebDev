const arrayUtils = require('./arrayUtils');
const stringUtils = require('./stringUtils');
const objUtils = require('./objUtils');

console.log("ARRAYS");
console.log("Mean Testing:");
try {
    console.log(arrayUtils.mean());
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.mean([]));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.mean([NaN]));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.mean(undefined));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.mean(NaN));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.mean(1,2));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.mean([1,"chicken"]));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.mean([[1],2]));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.mean([1]));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.mean([1,2]));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.mean([-99999,99999]));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.mean([1,2,3,4,5,6,7,8,9]));
} catch (e) {
    console.log(e);
}

console.log();

console.log("MedianSquared Testing:");
try {
    console.log(arrayUtils.medianSquared());
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.medianSquared([]));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.medianSquared([NaN]));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.medianSquared(undefined));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.medianSquared(1));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.medianSquared([1,"chicken"]));
} catch (e) {
    console.log(e);
}
try {
    console.log([1]);
    console.log(arrayUtils.medianSquared([1]));
} catch (e) {
    console.log(e);
}
try {
    console.log([1,2,3]);
    console.log(arrayUtils.medianSquared([3,2,1]));
} catch (e) {
    console.log(e);
}
try {
    console.log([1,2,3,4]);
    console.log(arrayUtils.medianSquared([3,4,2,1]));
} catch (e) {
    console.log(e);
}
try {
    console.log([41,49,51,95]);
    console.log(arrayUtils.medianSquared([51,41,95,49]));
} catch (e) {
    console.log(e);
}

console.log();

console.log("Max Element Testing:");
try {
    console.log(arrayUtils.maxElement());
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.maxElement([]));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.maxElement([NaN]));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.maxElement(undefined));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.maxElement(1));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.maxElement([1,"chicken"]));
} catch (e) {
    console.log(e);
}
try {
    console.log([1]);
    console.log(arrayUtils.maxElement([1]));
} catch (e) {
    console.log(e);
}
try {
    console.log([3,2,1]);
    console.log(arrayUtils.maxElement([3,2,1]));
} catch (e) {
    console.log(e);
}
try {
    console.log([3,4,2,1]);
    console.log(arrayUtils.maxElement([3,4,2,1]));
} catch (e) {
    console.log(e);
}
try {
    console.log([51,41,95,49]);
    console.log(arrayUtils.maxElement([51,41,95,49]));
} catch (e) {
    console.log(e);
}
try {
    console.log([51,41,95,49,95]);
    console.log(arrayUtils.maxElement([51,41,95,49,95]));
} catch (e) {
    console.log(e);
}

console.log();

console.log("Fill Testing:");
try {
    console.log(arrayUtils.fill());
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.fill(1,2,3));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.fill(2.5,3));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.fill("e",3));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.fill("e"));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.fill(0));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.fill(-9999));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.fill(3,"e"));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.fill(3));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.fill(3,undefined));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.fill(9,NaN));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.fill(9,-1));
} catch (e) {
    console.log(e);
}

console.log();

console.log("CountRepeating Testing:");
try {
    console.log(arrayUtils.countRepeating());
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.countRepeating(1));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.countRepeating(1,2));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.countRepeating([1],[2]));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.countRepeating([undefined,undefined]));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.countRepeating([true,false,true,false,'unknown']));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.countRepeating([{'b':2},{'a':1}])); // should i be accounting for this??
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.countRepeating([null,null])); // should i be accounting for this??
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.countRepeating([]));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.countRepeating([7,'7',13,true,true,true,"Hello","Hello","hello"]));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.countRepeating([1,2,3,4,5,6,1,2,3,4,5,1,2,3,4,1,2,3,1,2,1]));
} catch (e) {
    console.log(e);
}

console.log();

console.log("isEqual Testing:");
try {
    console.log(arrayUtils.isEqual());
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.isEqual([]));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.isEqual([],[],[]));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.isEqual(1,2));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.isEqual([],[]));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.isEqual([1],[1,2]));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.isEqual([6,[5,4,[3,2,1]]],[1,[2,3,[4,5,6]]]));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.isEqual([1,[2,3,[4,5,6]]],[[2,3,[4,5,6]]]));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.isEqual([1,[2,3,[4,5,6]]],[1,[2,4,[4,5,6]]]));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.isEqual(['a',['b','c',['d','e','f']]],['a',['b','d',['d','e','f']]]));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.isEqual([1,[2,3,[4,5,6]]],[1,[2,3,[4,5,6]]]));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.isEqual([[[[97,98,99],[],4],5],6],[[[[99,98,97],[],4],5],6]));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.isEqual([[1,2,3],[4,5,6]],[[1,2,3],[4,5,6]]));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.isEqual([[3,2,1],[6,5,4]],[[1,2,3],[4,5,6]]));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.isEqual([[1,'h',3],[5,"carrot",6]],[[1,3,'h'],["carrot",5,6]]));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.isEqual([[1,'h',3],[5,"carrot",6],[true, false, 9]],
                                   [[1,3,'h'],["carrot",5,6],[9, false, true]]));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.isEqual(['Z', 'R', 'B', 'C', 'A' ], ['R', 'B', 'C', 'A', 'Z']));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.isEqual([3,1,2], [1,2,3,4]));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.isEqual([[ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ]],
                                   [[ 3, 1, 2 ], [ 5, 4, 6 ], [ 9, 7, 8 ]]));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.isEqual([1,[2,[3,[4,[5,[6,[7,[8,[9,[0]]]]]]]]]],[1,[2,[3,[4,[5,[6,[7,[8,[9,[0]]]]]]]]]]));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.isEqual([[[[[[[[[[[[0],1],2],3],4],5],6],7],8],9],10],11],[[[[[[[[[[[[0],1],2],3],4],5],6],7],8],9],10],11]));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.isEqual([0,'0'],['0',0]));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.isEqual([-9999999,0,9999999,'a','z','0'],['0','a','z',0,9999999,-9999999]));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.isEqual(['0'],[0]));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.isEqual(['4206969',['90210',90210],4206969],[[90210,'90210'],'4206969',4206969]));
} catch (e) {
    console.log(e);
}
try {
    console.log(arrayUtils.isEqual(['4206969',['90210',90210],4206969],[4206969, '4206969', [90210,'90210']]));
} catch (e) {
    console.log(e);
}

console.log();

console.log("STRINGS");

console.log("camelCase Testing:");
try {
    console.log(stringUtils.camelCase());
} catch (e) {
    console.log(e);
}
try {
    console.log(stringUtils.camelCase(undefined));
} catch (e) {
    console.log(e);
}
try {
    console.log(stringUtils.camelCase(123));
} catch (e) {
    console.log(e);
}
try {
    console.log(stringUtils.camelCase(""));
} catch (e) {
    console.log(e);
}
try {
    console.log(stringUtils.camelCase("     "));
} catch (e) {
    console.log(e);
}
try {
    console.log(stringUtils.camelCase("p"));
} catch (e) {
    console.log(e);
}
try {
    console.log(stringUtils.camelCase("  p b n j  "));
} catch (e) {
    console.log(e);
}
try {
    console.log(stringUtils.camelCase("peanut butter"));
} catch (e) {
    console.log(e);
}
try {
    console.log(stringUtils.camelCase("  Peanut butter and jelly  "));
} catch (e) {
    console.log(e);
}

console.log();

console.log("replaceChar Testing:");
try {
    console.log(stringUtils.replaceChar());
} catch (e) {
    console.log(e);
}
try {
    console.log(stringUtils.replaceChar(""));
} catch (e) {
    console.log(e);
}
try {
    console.log(stringUtils.replaceChar("                  "));
} catch (e) {
    console.log(e);
}
try {
    console.log(stringUtils.replaceChar(1));
} catch (e) {
    console.log(e);
}
try {
    console.log(stringUtils.replaceChar(undefined));
} catch (e) {
    console.log(e);
}
try {
    console.log(stringUtils.replaceChar("a"));
} catch (e) {
    console.log(e);
}
try {
    console.log(stringUtils.replaceChar("                   a                 "));
} catch (e) {
    console.log(e);
}
try {
    console.log(stringUtils.replaceChar("babbbbble"));
} catch (e) {
    console.log(e);
}
try {
    console.log(stringUtils.replaceChar("Hello, How are you? I hope you are well"));
     // Returns: "Hello, *ow are you? I $ope you are well"
} catch (e) {
    console.log(e);
}
try {
    console.log(stringUtils.replaceChar("1234124123512345097235712491247132952173023111111"));
} catch (e) {
    console.log(e);
}
try {
    console.log(stringUtils.replaceChar("ffff this class"));
} catch (e) {
    console.log(e);
}
try {
    console.log(stringUtils.replaceChar("me when she packing: mmm"));
} catch (e) {
    console.log(e);
}

console.log();

console.log("MashUp Testing:");
try {
    console.log(stringUtils.mashUp());
} catch (e) {
    console.log(e);
}
try {
    console.log(stringUtils.mashUp("hello i am 1 argument"));
} catch (e) {
    console.log(e);
}
try {
    console.log(stringUtils.mashUp("     1     ", "two"));
} catch (e) {
    console.log(e);
}
try {
    console.log(stringUtils.mashUp("     one     ", "      2     "));
} catch (e) {
    console.log(e);
}
try {
    console.log(stringUtils.mashUp("1", "two"));
} catch (e) {
    console.log(e);
}
try {
    console.log(stringUtils.mashUp("one", "2"));
} catch (e) {
    console.log(e);
}
try {
    console.log(stringUtils.mashUp("Audie", "    "));
} catch (e) {
    console.log(e);
}
try {
    console.log(stringUtils.mashUp("    ", "Breslin"));
} catch (e) {
    console.log(e);
}
try {
    console.log(stringUtils.mashUp("if", "he"));
} catch (e) {
    console.log(e);
}
try {
    console.log(stringUtils.mashUp("     ab     ", "      cd     "));
} catch (e) {
    console.log(e);
}
try {
    console.log(stringUtils.mashUp("one of us is", "sussy"));
} catch (e) {
    console.log(e);
}
try {
    console.log(stringUtils.mashUp("Audie", "Breslin"));
} catch (e) {
    console.log(e);
}

console.log();

console.log("OBJECTS");
console.log("makeArray Testing:");
try {
    console.log(objUtils.makeArrays());
} catch (e) {
    console.log(e);
}
try {
    console.log(objUtils.makeArrays([]));
} catch (e) {
    console.log(e);
}
try {
    console.log(objUtils.makeArrays([{},1]));
} catch (e) {
    console.log(e);
}
try {
    console.log(objUtils.makeArrays([{}]));
} catch (e) {
    console.log(e);
}
try {
    console.log(objUtils.makeArrays([null,null]));
} catch (e) {
    console.log(e);
}
try {
    console.log(objUtils.makeArrays([{},{}]));
} catch (e) {
    console.log(e);
}
try {
    console.log(objUtils.makeArrays([{x:2,y:3},{z:4,w:1}]));
} catch (e) {
    console.log(e);
}
try {
    console.log(objUtils.makeArrays([{a:1,b:2,c:3},{}]));
} catch (e) {
    console.log(e);
}
try {
    console.log(objUtils.makeArrays([{a:1,b:2,c:3},{d:4,e:5,f:6}]));
} catch (e) {
    console.log(e);
}
try {
    console.log(objUtils.makeArrays([{a:1,b:2,c:3},{a:4,b:5,c:6}]));
} catch (e) {
    console.log(e);
}
try {
    console.log(objUtils.makeArrays([[1,2,3],[4,5,6]]));
} catch (e) {
    console.log(e);
}

console.log();

console.log("isDeepEqual Testing:");
try {
    console.log(objUtils.isDeepEqual());
} catch (e) {
    console.log(e);
}
try {
    console.log(objUtils.isDeepEqual(1,2));
} catch (e) {
    console.log(e);
}
try {
    console.log(objUtils.isDeepEqual({},2));
} catch (e) {
    console.log(e);
}
try {
    console.log(objUtils.isDeepEqual(null,null));
} catch (e) {
    console.log(e);
}
try {
    console.log(objUtils.isDeepEqual({a:1,b:2},{b:2,a:1}));
} catch (e) {
    console.log(e);
}
try {
    console.log(objUtils.isDeepEqual({a:1,b:2},{b:1,a:2}));
} catch (e) {
    console.log(e);
}
try {
    console.log(objUtils.isDeepEqual({a:{a:1},b:2},{b:2,a:{a:1}}));
} catch (e) {
    console.log(e);
}
try { // >:(
    console.log(objUtils.isDeepEqual({a:{a:{a:{a:{a:{a:{a:1}}}}}},b:2},{b:2,a:{a:{a:{a:{a:{a:{a:1}}}}}}}));
} catch (e) {
    console.log(e);
}
try { // >:(
    console.log(objUtils.isDeepEqual({a:[1],b:2},{b:2,a:[1]}));
} catch (e) {
    console.log(e);
}
try { // >:(
    console.log(objUtils.isDeepEqual({a:[{a:1}],b:2},{b:2,a:[{a:1}]}));
} catch (e) {
    console.log(e);
}
try { // >:(
    console.log(objUtils.isDeepEqual({a:[{a:[{a:[{a:[{a:1}]}]}]}],b:2},{b:2,a:[{a:[{a:[{a:[{a:1}]}]}]}]}));
} catch (e) {
    console.log(e);
}
try { // >:(
    console.log(objUtils.isDeepEqual({a:[{a:1},{b:2}],b:2},{b:2,a:[{a:1},{b:1}]}));
} catch (e) {
    console.log(e);
}
try { // >:(
    console.log(objUtils.isDeepEqual({a:[{a:1},{b:2}],b:2},{b:2,a:[{a:1},{b:1}]}));
} catch (e) {
    console.log(e);
}
try { // >:(
    console.log(objUtils.isDeepEqual({a:[{a:1},{b:2},{c:[1,2,3,4,5]}],b:2},{b:2,a:[{a:1},{b:2},{c:[1,2,3,4,5]}]}));
} catch (e) {
    console.log(e);
}
try { // >:(
    console.log(objUtils.isDeepEqual({a:(i,hate,js) => {return i,hate,js;}},{a:(i,hate,js) => {return i,hate,js;}}));
} catch (e) {
    console.log(e);
}
try {
    console.log(objUtils.isDeepEqual({a:[true,false,true]},{a:[true,"false",true]}));
} catch (e) {
    console.log(e);
}
try {
    console.log(objUtils.isDeepEqual({a:["true",false,true]},{a:[true,false,"true"]}));
} catch (e) {
    console.log(e);
}
try { // forth fifth example
    console.log(objUtils.isDeepEqual({a: {sA: "Hello", sB: "There", sC: "Class"}, b: 7, c: true, d: "Test"},{c: true, b: 7, d: "Test", a: {sB: "There", sC: "Class", sA: "Hello"}}));
} catch (e) {
    console.log(e);
}
try { 
    console.log(objUtils.isDeepEqual({a:'t'},{a:'T'}));
} catch (e) {
    console.log(e);
}
try { 
    console.log(objUtils.isDeepEqual({a: [1,2,{g:'hello',h:[1,2,3]}], b: 3},{a: [1,2,{g:'hello',h:[1,2,3]}], b: 3}));
} catch (e) {
    console.log(e);
}

console.log();

console.log("computeObject Testing:");
try { 
    console.log(objUtils.computeObject());
} catch (e) {
    console.log(e);
}
try { 
    console.log(objUtils.computeObject(1,2,3));
} catch (e) {
    console.log(e);
}
try { 
    console.log(objUtils.computeObject(1,2));
} catch (e) {
    console.log(e);
}
try { 
    console.log(objUtils.computeObject({},2));
} catch (e) {
    console.log(e);
}
try { 
    console.log(objUtils.computeObject({a:1},undefined));
} catch (e) {
    console.log(e);
}
try { 
    console.log(objUtils.computeObject({a:'1'},() => {}));
} catch (e) {
    console.log(e);
}
try { 
    console.log(objUtils.computeObject({a:1,b:NaN},() => {}));
} catch (e) {
    console.log(e);
}
try { 
    console.log(objUtils.computeObject({a:1},(num) => {return num*2}));
} catch (e) {
    console.log(e);
}
try { 
    console.log(objUtils.computeObject({a:1,b:{a:3}},(num) => {return num**2}));
} catch (e) {
    console.log(e);
}
try { 
    console.log(objUtils.computeObject({a:1,b:2,c:3,d:4},(num) => {return num**2}));
} catch (e) {
    console.log(e);
}
try { 
    console.log(objUtils.computeObject({a:0,b:5,c:100,d:95, e:50},(num) => {return `What are the odds these are seen? About ${num}%.`;}));
} catch (e) {
    console.log(e);
}
try { 
    console.log(objUtils.computeObject({a:0,b:0,c:0,d:0, e:-5},(num) => {return `What are the odds I caught every edge case? About ${num}%.`;}));
} catch (e) {
    console.log(e);
}