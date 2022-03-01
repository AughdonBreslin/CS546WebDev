const axios = require('axios');

function checkNumOfArgs(args, numArgsLow, numArgsHigh) {
  if(args.length < numArgsLow || args.length > numArgsHigh) throw (numArgsLow == numArgsHigh)
   ? ((numArgsLow == 1) 
      ? `Error: Exactly ${numArgsLow} argument must be provided.`
      : `Error: Exactly ${numArgsLow} arguments must be provided.`)
   : `Error: Number of arguments must be between ${numArgsLow} and ${numArgsHigh} (inclusive).`;
}

function checkIsProper (val, varType, variableName) {
  // Check parameter type is correct (also checks if its defined)
  if (typeof val != varType) throw `Error: ${variableName || 'provided variable'} must be a ${varType}.`;

  // Also required to catch NaNs since theyre technically type 'number'
  if (varType == 'number' && isNaN(val)) throw `Error: ${variableName || 'provided variable'} must not be NaN.`;
  
  // For strings, check if trimmed string is empty
  if(varType == 'string' && val.trim().length < 1) throw (1 == 1)
   ? `Error: Trimmed ${variableName || 'provided variable'} must be at least 1 character long.`
   : `Error: Trimmed ${variableName || 'provided variable'} must be at least ${length} characters long.`;
}

function checkInt(val,variableName) {
  if(!Number.isInteger(val)) throw `Error: ${variableName} must be an integer.`;
}

const getPeople = async function getPeople() {
  const {data} = await axios.get('https://gist.githubusercontent.com/graffixnyc/31e9ef8b7d7caa742f56dc5f5649a57f/raw/43356c676c2cdc81f81ca77b2b7f7c5105b53d7f/people.json');
  return data;
}
const getWork = async function getWork() {
  const {data} = await axios.get('https://gist.githubusercontent.com/graffixnyc/febcdd2ca91ddc685c163158ee126b4f/raw/c9494f59261f655a24019d3b94dab4db9346da6e/work.json');
  return data;
}

let exportedMethods = {
  getPeople,
  async getPersonById(id) {
    checkNumOfArgs(arguments,1,1);
    id = parseInt(id);
    checkIsProper(id,'number','ID');
    checkInt(id,'ID');

    // get directory, search for id, if not found throw, else return
    let people = await getPeople();
    let target = people.find((person) => person.id == id);

    if(!target) throw `Error: No person found with id ${id}.`;
    return target;
  },
  
  getWork,
  async getWorkById(id) {
    checkNumOfArgs(arguments,1,1);
    id = parseInt(id);
    checkIsProper(id,'number','ID');
    checkInt(id,'ID');

    // get directory, search for id, if not found throw, else return
    let companies = await getWork();
    let company = companies.find((company) => company.id == id);
    if(!company) throw `Error: No company found with id ${id}.`;
    return company;
  }
};

module.exports = exportedMethods;
