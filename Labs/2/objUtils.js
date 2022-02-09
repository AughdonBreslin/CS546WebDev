
function checkNumOfArgs(args, numArgsLow,numArgsHigh) {
    if(args.length < numArgsLow || args.length > numArgsHigh) throw (numArgsLow == numArgsHigh)
     ? ((numArgsLow == 1) 
        ? `Error: Exactly ${numArgsLow} argument must be provided.`
        : `Error: Exactly ${numArgsLow} arguments must be provided.`)
     : `Error: Number of arguments must be between ${numArgsLow} and ${numArgsHigh} (inclusive).`;
}

function checkIsProper (val, variableName) {
    // Check parameter type is correct (also checks if its defined)
    if (typeof val != 'object') throw `Error: ${variableName || 'provided variable'} must be an object.`;
}


function checkArray(array, length) {
    if(!Array.isArray(array)) throw "Error: Argument must be an array.";
    if(array.length < length) throw `Error: Array must contain atleast ${length} elements.`;
    for (let i = 0; i < array.length; i++) {
        checkIsProper(array[i],`array[${i}]`);
    }
}

function checkObj(object, objName, cantBeEmpty=true,objType) {
    if(object == null || typeof object != 'object' || Array.isArray(object)) throw `Error: ${objName || "Argument"} must be a defined object.`;
    if(cantBeEmpty && Object.keys(object).length == 0) throw `Error: ${objName} cannot be an empty object.`
    if(objType) {
        for (const key in object) {
            if (typeof object[key] != objType) throw `Error: '${object[key]}' must be a ${objType} type.`;
            if (objType == 'number' && isNaN(object[key])) throw `Error: 'NaN' is not a valid number.`;
        }
    }
}

function checkFun(func, funName) {
    if(typeof func != 'function') throw `Error: ${funName || "Argument"} must be a defined function.`;
}

function checkNumOfArgs(args, numArgsLow,numArgsHigh) {
    if(args.length < numArgsLow || args.length > numArgsHigh) throw (numArgsLow == numArgsHigh)
     ? ((numArgsLow == 1) 
        ? `Error: Exactly ${numArgsLow} argument must be provided.`
        : `Error: Exactly ${numArgsLow} arguments must be provided.`)
     : `Error: Number of arguments must be between ${numArgsLow} and ${numArgsHigh} (inclusive).`;
}

const makeArrays = function makeArrays(array) {
    checkNumOfArgs(arguments,1,1);
    checkArray(array,2); // ensure everything inside the array is an object (and theres >=2)
    let result = [];
    for (let i = 0; i < array.length; i++) {
        checkObj(array[i], `array[${i}]`);
        for (const elem in array[i]) {
            result.push([elem,array[i][elem]]);
        }
    }
    return result;
}
// not a fan of this one >:(
const isDeepEqual = function isDeepEqual(obj1,obj2) {
    checkNumOfArgs(arguments,2,2);
    checkObj(obj1, "obj1", false);
    checkObj(obj2, "obj2", false);
    let keys1 = Object.keys(obj1).sort();
    let keys2 = Object.keys(obj2).sort();
    // key length is different
    if(keys1.length != keys2.length) return false;
    // if key content is different
    for(let i = 0; i < keys1.length; i++) {
        if(keys1[i] !== keys2[i]) return false;
        let value1 = obj1[keys1[i]];
        let value2 = obj2[keys2[i]];
        //if theyre both objects, go fuck yourself
        if((typeof value1 == 'object' && typeof value2 == 'object')
         || (typeof value1 == 'function' && typeof value2 == 'function')) {
            // if one of them is null, wont be able to call toString
            if (value1 == null || value2 == null) {
                if (value1 !== value2) return false;
            } else { // both are not null
                //if both are arrays
                if(Array.isArray(value1) && Array.isArray(value2)) {
                    if(value1.length != value2.length) return false;
                    for(let j = 0; j < value1.length; j++) {
                        // element in both arrays are not objects, so we can just compare
                        if(typeof value1[j] != 'object' && typeof value2[j] != 'object') {
                            if(value1[j] !== value2[j]) return false;
                        } // one element is an object and the other is not, insta bad
                        else if((typeof value1[j] == 'object' && typeof value2[j] != 'object')
                             || (typeof value1[j] != 'object' && typeof value2[j] == 'object')) return false;
                        // element in both arrays are objects, so we recurse
                        else if(!isDeepEqual(value1[j],value2[j])) return false;
                    }
                    
                } // if only one is an array
                else if((Array.isArray(value1) && !Array.isArray(value2))
                     || (!Array.isArray(value1) && Array.isArray(value2))) return false;

                // neither are arrays
                // if value1 is a proper object
                else if(value1.toString() == "[object Object]"){
                    // if value2 is not a proper object, insta bad
                    if(value2.toString() != "[object Object]") return false;                    

                    // both proper objects, go check if inner objects are equal
                    else if(!isDeepEqual(value1,value2)) return false;
                } else { // value1 is not a proper object, so its an array/function/whatever the fuck else
                    // go check the toStrings to see if functions, arrays, dates, cats, neural networks, operating systems, human scans, fortnite dances, uploaded genomes are identical
                    if(value1.toString() != value2.toString()) return false;
                }
            }
        }
        // if only one or the other is an object, insta bad
        else if (((typeof value1 == 'object' && typeof value2 != 'object')
                || (typeof value1 != 'object' && typeof value2 == 'object'))
              || ((typeof value1 == 'function' && typeof value2 != 'function')
                || (typeof value1 != 'function' && typeof value2 == 'function'))) return false;

        // primitive datatypes, so normal comparison yay
        else if(value1 !== value2) return false;
    }
    // give up on trying to find differences
    return true;
}
const computeObject = function computeObject(object,func) {
    checkNumOfArgs(arguments,2,2);
    checkObj(object,'object',true,'number');
    checkFun(func,'func');
    let result = {};
    for (const key in object){
        result[key] = func(object[key]);
    }
    return result;

}



module.exports = {
    firstName: "Aughdon", 
    lastName: "Breslin", 
    studentId: "10447694",
    makeArrays,
    isDeepEqual,
    computeObject
};