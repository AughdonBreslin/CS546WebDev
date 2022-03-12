const {ObjectId} = require('mongodb');

const checkNumOfArgs = function checkNumOfArgs(args, numArgsLow, numArgsHigh) {
  if(args.length < numArgsLow || args.length > numArgsHigh) throw (numArgsLow == numArgsHigh)
   ? ((numArgsLow == 1) 
      ? `Error: Exactly ${numArgsLow} argument must be provided.`
      : `Error: Exactly ${numArgsLow} arguments must be provided.`)
   : `Error: Number of arguments must be between ${numArgsLow} and ${numArgsHigh} (inclusive).`;
};

const checkIsProper = function checkIsProper (val, varType, variableName) {
  // Check parameter type is correct (also checks if its defined)
  if (typeof val != varType) throw `Error: ${variableName || 'provided variable'} must be a ${varType}.`;

  // Also required to catch NaNs since theyre technically type 'number'
  if (varType == 'number' && isNaN(val)) throw `Error: ${variableName || 'provided variable'} must not be NaN.`;
  
  // For strings, check if trimmed string is empty
  if(varType == 'string' && val.trim().length < 1) throw (1 == 1)
   ? `Error: Trimmed ${variableName || 'provided variable'} must be at least 1 character long.`
   : `Error: Trimmed ${variableName || 'provided variable'} must be at least ${length} characters long.`;
};

const checkArray = function checkArray(array, elemType, arrName) {
  if(!Array.isArray(array)) throw `Error: ${arrName} must be an array.`;
  if(array.length == 0) throw `Error: ${arrName} must not be empty.`;
  for (const elem of array) {
      checkIsProper(elem,elemType,`Within ${arrName}, ${elem}`);
  }
};

const checkWebsite = function checkWebsite(website) {
  if (website.indexOf('http://www.') != 0) throw `Error: Website ${website} must begin with 'http://www.'.`;
  if (website.indexOf('.com') == -1
      || website.substr(website.indexOf('.com')+4) != "") throw `Error: Website ${website} must end in with '.com'.`;
  if (website.length < 20) throw `Error: There must be at least 5 characters in between 'http://www.' and '.com'.`
};

const checkYear = function checkYear(year) {
  if (!Number.isInteger(year)) throw `Error: Year must be an integer.`;
  if (year < 1900 || year > 2022) throw `Error: Year must be within the range [1900,2022].`;
};

const checkTracks = function checkTracks(array, elemType, arrName) {
  if(!Array.isArray(array)) throw `Error: ${arrName} must be an array.`;
  if(array.length < 3) throw `Error: ${arrName} must contain at least three tracks.`;
  for (const elem of array) {
      checkIsProper(elem,elemType,`Within ${arrName}, ${elem}`);
  }
}

const checkRelease = function checkRelease(date) {
  if (date.length != 10) throw `Error: Release date must be in form 'MM/DD/YYYY'.`;
  let year = parseInt(date.substr(-4));
  if (isNaN(year) || !Number.isInteger(year) || year < 1900 || year > 2023) throw `Error: Year must be a number within the range [1900,2023].`;
}
const checkRating = function checkRating(rating) {
  if(rating < 1 || rating > 5) throw `Error: Rating must be a number within the range [1,5].`;
}

const trimArray = function trimArray(array) {
  for (i in array) {
      array[i] = array[i].trim();
  }
  return array;
};



const checkId = function checkId(id, varName) {
  if (!id) throw `Error: You must provide a ${varName}`;
  if (typeof id !== 'string') throw `Error:${varName} must be a string`;
  id = id.trim();
  if (id.length === 0)
    throw `Error: ${varName} cannot be an empty string or just spaces`;
  if (!ObjectId.isValid(id)) throw `Error: ${varName} invalid object ID`;
  return id;
};

const checkString = function checkString(strVal, varName) {
  if (!strVal) throw `Error: You must supply a ${varName}!`;
  if (typeof strVal !== 'string') throw `Error: ${varName} must be a string!`;
  strVal = strVal.trim();
  if (strVal.length === 0)
    throw `Error: ${varName} cannot be an empty string or string with just spaces`;
  if (!isNaN(strVal))
    throw `Error: ${strVal} is not a valid value for ${varName} as it only contains digits`;
  return strVal;
};

const checkStringArray = function checkStringArray(arr, varName) {
  //We will allow an empty array for this,
  //if it's not empty, we will make sure all tags are strings
  let arrayInvalidFlag = false;
  if (!arr || !Array.isArray(arr))
    throw `You must provide an array of ${varName}`;
  for (i in arr) {
    if (typeof arr[i] !== 'string' || arr[i].trim().length === 0) {
      arrayInvalidFlag = true;
      break;
    }
    arr[i] = arr[i].trim();
  }
  if (arrayInvalidFlag)
    throw `One or more elements in ${varName} array is not a string or is an empty string`;
  return arr;
};

module.exports = {
  checkId,
  checkString,
  checkStringArray,  
  checkNumOfArgs,
  checkIsProper,
  checkArray,
  checkWebsite,
  checkYear,
  trimArray,
  checkRating,
  checkRelease,
  checkTracks
};
