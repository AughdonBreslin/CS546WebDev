const mongoCollections = require('../config/mongoCollections');
const bands = mongoCollections.bands;
const { ObjectId } = require('mongodb');

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

function checkArray(array, elemType, arrName) {
    if(!Array.isArray(array)) throw `Error: ${arrName} must be an array.`;
    if(array.length == 0) throw `Error: ${arrName} must not be empty.`;
    for (const elem of array) {
        checkIsProper(elem,'string',`Within ${arrName}, ${elem}`);
    }
}

function checkWebsite(website) {
    if (website.indexOf('http://www.') != 0) throw `Error: Website ${website} must begin with 'http://www.'.`;
    if (website.indexOf('.com') == -1
        || website.substr(website.indexOf('.com')+4) != "") throw `Error: Website ${website} must end in with '.com'.`;
    if (website.length < 20) throw `Error: There must be at least 5 characters in between 'http://www.' and '.com'.`
}

function checkYear(year) {
    if (!Number.isInteger(year)) throw `Error: Year must be an integer.`;
    if (year < 1900 || year > 2022) throw `Error: Year must be within the range [1900,2022].`;
}

function trimArray(array) {
    for (i in array) {
        array[i] = array[i].trim();
    }
    return array;
}

async function getBandById(id) {
    checkNumOfArgs(arguments,1,1);
    checkIsProper(id,'string','ID');
    id = id.trim();
    if (!ObjectId.isValid(id)) throw 'Errpr: Invalid object ID';
    const bandCollection = await bands();
    const band = await bandCollection.findOne({ _id: ObjectId(id) });
    if (band === null) throw `Error: Band not found with ID ${id}.`;

    return band;
};

const create = async function create(name, genre, website, recordLabel, bandMembers, yearFormed) {

    // Error Checking
    checkNumOfArgs(arguments,6,6);
    checkIsProper(name, 'string', 'name');
    checkArray(genre, 'string', 'genre');
    checkIsProper(website, 'string', 'website');
    checkWebsite(website)
    checkIsProper(recordLabel, 'string', 'recordLabel');
    checkArray(bandMembers,'string','bandName');
    checkIsProper(yearFormed,'number','yearFormed');
    checkYear(yearFormed)

    // Trimming
    name = name.trim();
    genre = trimArray(genre);
    recordLabel = recordLabel.trim();
    bandMembers = trimArray(bandMembers);

    // Get database and create entry
    const bandCollection = await bands();
    if(!bandCollection) throw `Error: Could not find bandCollection.`;

    let newBand = {
      name: name,
      genre: genre,
      website: website,
      recordLabel: recordLabel,
      bandMembers: bandMembers,
      yearFormed: yearFormed
    };

    // Add entry into database
    const insertInfo = await bandCollection.insertOne(newBand);
    if (!insertInfo.acknowledged || !insertInfo.insertedId) throw `Error: Could not add new band.`;

    // Return the added entry
    const newId = insertInfo.insertedId.toString();
    const band = await getBandById(newId);
    band._id = band._id.toString();
    
    return band;
}

const getAll = async function getAll() {
    checkNumOfArgs(arguments,0,0);
    const bandCollection = await bands();
    const bandList = await bandCollection.find({}).toArray();
    if(!bandList) throw `Error: Could not find bandCollection.`;
    for(i in bandList) {
        bandList[i]._id = bandList[i]._id.toString();
    }
    return bandList;
}

const get = async function get(id) {
    checkNumOfArgs(arguments,1,1);
    checkIsProper(id,'string','ID');
    id = id.trim();
    // apparently this is a better check than ObjectId.isValid(), according to
    // https://stackoverflow.com/questions/13850819/can-i-determine-if-a-string-is-a-mongodb-objectid
    if(id != new ObjectId(id)) throw `Error: ID is not a valid ObjectId.`;

    const bandCollection = await bands();
    const band = await bandCollection.findOne({ _id: ObjectId(id) });
    if(!band) throw `Error: Band not found with ID ${id}.`;
    band._id = band._id.toString();
    return band;
}

const remove = async function remove(id) {
    checkNumOfArgs(arguments,1,1);
    checkIsProper(id,'string','ID');
    id = id.trim();
    // apparently this is a better check than ObjectId.isValid(), according to
    // https://stackoverflow.com/questions/13850819/can-i-determine-if-a-string-is-a-mongodb-objectid
    if(!ObjectId.isValid(id) || id != new ObjectId(id)) throw `Error: ID is not a valid ObjectId.`;
    const bandCollection = await bands();
    const band = await bandCollection.findOneAndDelete({ _id: ObjectId(id) });
    if(!band.value) throw `Error: Band not found with ID ${id}.`;

    return `${band.value.name} has been successfully deleted!`;
}

const rename = async function rename(id,newName) {
    checkNumOfArgs(arguments,2,2);
    checkIsProper(id,'string','ID');
    checkIsProper(newName,'string','newName');
    id = id.trim();
    newName = newName.trim();
    if(!ObjectId.isValid(id) || id != new ObjectId(id)) throw `Error: ID is not a valid ObjectId.`;
    const bandCollection = await bands();
    const updatedInfo = await bandCollection.updateOne({ _id: ObjectId(id) },{$set:{name:newName}});
    if(!updatedInfo.acknowledged) throw `Error: Band not found with ID ${id}.`;
    let band = await getBandById(id);
    band._id = band._id.toString();
    return band;
}

module.exports = {
    firstName: "Aughdon",
    lastName: "Breslin",
    studentId: "10447694",
    create,
    getAll,
    get,
    remove,
    rename
}