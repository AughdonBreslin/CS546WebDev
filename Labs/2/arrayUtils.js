// YAY ERROR CHECKING
function checkIsProper (val, varType, variableName) {
    // Check parameter type is correct (also checks if its defined)
    if (typeof val != varType) throw `Error: ${variableName || 'provided variable'} must be a ${varType}.`;

    // Also required to catch NaNs since theyre technically type 'number'
    if (varType == 'number' && isNaN(val)) throw `Error: ${variableName || 'provided variable'} must not be NaN.`;
}

function checkArray(array, arrayContentType) {
    if(!Array.isArray(array)) throw "Error: Argument must be an array.";
    if(array.length == 0) throw "Error: Array must not be empty.";
    for (let i = 0; i < array.length; i++) {
        checkIsProper(array[i], arrayContentType, `array[${i}]`);
    }
}

function checkMixedArray(array) {
    if(!Array.isArray(array)) throw "Error: Argument must be an array.";
}

function checkNumOfArgs(args, numArgsLow,numArgsHigh) {
    if(args.length < numArgsLow || args.length > numArgsHigh) throw (numArgsLow == numArgsHigh)
     ? ((numArgsLow == 1) 
        ? `Error: Exactly ${numArgsLow} argument must be provided.`
        : `Error: Exactly ${numArgsLow} arguments must be provided.`)
     : `Error: Number of arguments must be between ${numArgsLow} and ${numArgsHigh} (inclusive).`;
}

function checkGreaterThanZero(val,variableName) {
    if(val <= 0) throw `Error: ${variableName} must be a number greater than 0.`
}

const mean = function mean(array) {
    checkNumOfArgs(arguments,1,1);
    checkArray(array,'number');
    let sumArr = 0;
    for (let i = 0; i < array.length; i++) {
        sumArr += array[i];
    }
    return sumArr/array.length;
}

const medianSquared = function medianSquared(array) {
    checkNumOfArgs(arguments,1,1);
    checkArray(array,'number');
    array.sort();
    let median = 0;
    if((array.length-1)/2 % 1 == 0) 
        median = array[(array.length-1)/2];
    else 
        // low + (high-low)/2
        median = array[(array.length-2)/2] + 
                 (array[(array.length)/2] - array[(array.length-2)/2])/2;
    return median**2;
}

const maxElement = function maxElement(array) {
    checkNumOfArgs(arguments,1,1);
    checkArray(array,'number');
    let idx = 0;
    let max = Number.MIN_VALUE;
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
            idx = i;
        }
    }
    let result = {};
    result[max] = idx;
    return result; 
}

const fill = function fill(end,value) {
    checkNumOfArgs(arguments,1,2);
    checkIsProper(end,'number', 'end');
    checkGreaterThanZero(end,'end');
    let array = new Array(Math.ceil(end));
    if(arguments.length == 2) {
        for(let i = 0; i < array.length; i++) {
            array[i] = value;
        }
    } else {
        for(let i = 0; i < array.length; i++) {
            array[i] = i;
        }
    }
    return array;
}

const countRepeating = function countRepeating(array) {
    checkNumOfArgs(arguments,1,1);
    checkMixedArray(array);
    let tallies = {};
    // count everything up
    for (let i = 0; i < array.length; i++) {
        if(array[i] in tallies) {
            tallies[array[i]] += 1;
        }
        else tallies[array[i]] = 1;
    }
    // remove the ones that appeared only once
    for (const elem in tallies) {
        if(tallies[elem] == 1) {
            delete tallies[elem];
        }
    }
    return tallies;
}
function sortAllTheseTypes(arr) {
    let count = 0;
    // put all elements in this order of types
    for(const elem of ['string','number','undefined','null','boolean','symbol','object','function']) {
        for(let j = 0; j < arr.length; j++) { //[0,'0']
            if(typeof arr[j] == elem){
                if(elem == 'object') { //object is code word for array for this stinky problem
                    arr[j] = sortAllTheseTypes(arr[j]);
                } else {
                    let temp = arr[j];            //temp = '0'
                    arr[j] = arr[count];  //[0, 0]
                    arr[count] = temp;        //['0',0]
                    count++;
                }
            }
        }
    }
    // still using sort() ;)
    arr.sort();
    return arr;
}
const isEqual = function isEqual(arrayOne,arrayTwo) {
    checkNumOfArgs(arguments,2,2);
    checkMixedArray(arrayOne);
    checkMixedArray(arrayTwo);

    // sorting immediately doesnt seem to hurt anything, SIKE it does 
      // also sorting in ascending order doesnt matter as long as theyre both done the same way
        // ALL THESE TYPES MFERS ALL THESE TYPES GODDAMN
    arrayOne = sortAllTheseTypes(arrayOne);
    arrayTwo = sortAllTheseTypes(arrayTwo);
    // check size
    if(arrayOne.length != arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
        // if only one is array, insta bad
        if((Array.isArray(arrayOne[i]) && !Array.isArray(arrayTwo[i]))
         || (!Array.isArray(arrayOne[i]) && Array.isArray(arrayTwo[i]))) {
             return false;
         }
        
        // if both arrays, dive in and check those
        if(Array.isArray(arrayOne[i]) && Array.isArray(arrayTwo[i])) {
            // can work for array of arrays but i fear it may not for array of arrays of arrays
            // put all strings first to account for '0' and 0 not being prioritized
            arrayOne[i] = sortAllTheseTypes(arrayOne[i]);
            arrayTwo[i] = sortAllTheseTypes(arrayTwo[i]);
        
            // if subarrays are not equal, return false
            if(!isEqual(arrayOne[i],arrayTwo[i])) return false;
        }
        
    }
    for (let i = 0; i < arrayOne.length; i++) {
        // if neither are arrays, check equality
        if(!Array.isArray(arrayOne[i]) && !Array.isArray(arrayTwo[i])) {
            if(arrayOne[i] !== arrayTwo[i]) {
                return false;
            }
        }
    }
    // couldnt find any differences, so we give up and say theyre equivalent
    return true;
}


module.exports = {
    firstName: "Aughdon", 
    lastName: "Breslin", 
    studentId: "10447694",
    mean,
    medianSquared,
    maxElement,
    fill,
    countRepeating,
    isEqual
};