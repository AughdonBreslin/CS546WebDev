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

async function getPeople() {
    const {data} = await axios.get('https://gist.githubusercontent.com/graffixnyc/a1196cbf008e85a8e808dc60d4db7261/raw/9fd0d1a4d7846b19e52ab3551339c5b0b37cac71/people.json');
    return data;
}

function checkEmailDomain(emailDomain) {
    if (emailDomain.indexOf('.') == -1) throw `Error: No '.' symbol found in  "${emailDomain}".`;
    if (emailDomain.indexOf('.') == 0) throw `Error: No domain name found before '.'`;

    let domain = emailDomain.substr(emailDomain.indexOf('.')+1);
    // get to the last dot
    while(domain.indexOf('.') != -1) {
        domain = domain.substr(domain.indexOf('.')+1);
    }
    if(domain.length < 2) throw `Error: There must be at least two letters after the dot.`;
    for (let i = 0; i < domain.length; i++) {
        if(!isNaN(domain.charAt(i))) throw `Error: After the dot, the characters must be letters.`;
    }
}


const getPersonById = async function getPersonById(id) {
    checkNumOfArgs(arguments,1,1);
    checkIsProper(id,'string','ID');
    id = id.trim();

    // get directory, search for id, if not found throw, else return
    let people = await getPeople();
    let target = people.find((person) => person.id == id);
    if(!target) throw `Error: No person found with id "${id}".`;
    return target;
}

const sameEmail = async function sameEmail(emailDomain) {
    checkNumOfArgs(arguments,1,1);
    checkIsProper(emailDomain,'string', 'emailDomain');
    emailDomain = emailDomain.trim().toLowerCase();
    checkEmailDomain(emailDomain);
    let people = await getPeople();
    let hitList = people.filter((person) => person.email.substr(person.email.indexOf('@')+1) == emailDomain);
    if(hitList.length < 2) throw `Error: Not enough people with domain name ${emailDomain}.`;
    return hitList;
}

const manipulateIp = async function manipulateIp() {
    checkNumOfArgs(arguments,0,0);
    let people = await getPeople();
    let high = {};
    let highIP = -1;
    let low = {};
    let lowIP = 9999999999999;
    let sum = 0;
    for(const person of people) {
        let ip = person.ip_address;
        ip = ip.replaceAll('.','');
        ip = parseInt(ip.split('').sort().join(""));
        if(highIP < ip) {
            highIP = ip;
            high.firstName = person.first_name;
            high.lastName = person.last_name;
        }
        if(lowIP > ip) {
            lowIP = ip;
            low.firstName = person.first_name;
            low.lastName = person.last_name;
        }
        sum += ip;
    }
    let average = Math.floor(sum/people.length);
    return {
        highest: high,
        lowest: low,
        average: average
    };
}

const sameBirthday = async function sameBirthday(month,day) {
    checkNumOfArgs(arguments,2,2);
    month = parseInt(month);
    day = parseInt(day);
    checkIsProper(month,'number','month');
    checkIsProper(day,'number','day');
    if (month < 1 || month > 12) throw `Error: Month must be in range [1,12].`;
    if (day < 1) throw `Error: Day cannot be less than 1.`;
    if([1,3,5,7,8,10,12].includes(month) && day > 31) throw `Error: Month ${month} does not have more than 31 days.`;
    if([4,6,9,11].includes(month) && day > 30) throw `Error: Month ${month} does not have more than 30 days.`;
    if(month == 2 && day > 28) throw `Error: February does not have more than 28 days (I'm looking at you, leap year people.).`;

    let people = await getPeople();
    let hitList = people.filter((person) => (person.date_of_birth.substr(0,2) == month)
                                         && (person.date_of_birth.substr(3,2) == day));
    if (hitList.length < 1) throw `Error: No people with birthday ${month}/${day}.`


    return hitList;
}

module.exports = {
    firstName: "Aughdon", 
    lastName: "Breslin", 
    studentId: "10447694",
    getPersonById,
    sameEmail,
    manipulateIp,
    sameBirthday
};