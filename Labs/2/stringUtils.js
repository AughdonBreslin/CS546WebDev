function checkNumOfArgs(args, numArgsLow,numArgsHigh) {
    if(args.length < numArgsLow || args.length > numArgsHigh) throw (numArgsLow == numArgsHigh)
     ? ((numArgsLow == 1) 
        ? `Error: Exactly ${numArgsLow} argument must be provided.`
        : `Error: Exactly ${numArgsLow} arguments must be provided.`)
     : `Error: Number of arguments must be between ${numArgsLow} and ${numArgsHigh} (inclusive).`;
}

function checkIsProper (val, variableName,length=1) {
    // Check parameter type is correct (also checks if its defined)
    if (typeof val != 'string') throw `Error: ${variableName || 'provided variable'} must be a string.`;
    if(val.trim().length < length) throw (length == 1)
     ? `Error: Trimmed ${variableName || 'provided variable'} must be at least 1 character long.`
     : `Error: Trimmed ${variableName || 'provided variable'} must be at least ${length} characters long.`;
}

const camelCase = function camelCase(string) {
    checkNumOfArgs(arguments,1,1);
    checkIsProper(string,'string');
    let split = string.trim().split(' ');
    split[0] = split[0].charAt(0).toLowerCase()+split[0].substr(1);
    for (let i = 1; i < split.length; i++) {
        split[i] = split[i].charAt(0).toUpperCase()+split[i].substr(1);
    }
    return split.join("");
}

const replaceChar = function replaceChar(string) {
    checkNumOfArgs(arguments,1,1);
    checkIsProper(string,'string');
    string = string.trim();
    let char = string.charAt(0).toLowerCase();
    let count = 0;
    for (let i = 1; i < string.length; i++) {
        if(string.charAt(i).toLowerCase() == char){
            if(count%2 == 0) string = string.substr(0,i)+ '*' +string.substr(i+1)
            if(count%2 == 1) string = string.substr(0,i)+ '$' +string.substr(i+1)
            count++;
        }
    }
    return string;
}

const mashUp = function mashUp(string1,string2) {
    checkNumOfArgs(arguments,2,2);
    checkIsProper(string1,'string 1',2);
    checkIsProper(string2,'string 2',2);
    string1 = string1.trim();
    string2 = string2.trim();
    let bit1 = string1.charAt(0)+string1.charAt(1);
    let bit2 = string2.charAt(0)+string2.charAt(1);
    string1 = string1.substr(2);
    string2 = string2.substr(2);
    return `${bit2}${string1} ${bit1}${string2}`;
}

module.exports = {
    firstName: "Aughdon", 
    lastName: "Breslin", 
    studentId: "10447694",
    camelCase,
    replaceChar,
    mashUp
};