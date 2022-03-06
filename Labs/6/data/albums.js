const mongoCollections = require('../config/mongoCollections');
const albums = mongoCollections.albums;
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

function checkTracks(array, elemType, arrName) {
    if(!Array.isArray(array)) throw `Error: ${arrName} must be an array.`;
    if(array.length < 3) throw `Error: ${arrName} must contain at least three tracks.`;
    for (const elem of array) {
        checkIsProper(elem,elemType,`Within ${arrName}, ${elem}`);
    }
}

function checkRelease(date) {
    if (date.length < 10) throw `Error: Release date must be in form 'MM/DD/YYYY'.`;
    let year = parseInt(date.substr(-4));
    if (isNaN(year) || year < 1900 || year > 2023) throw `Error: Year must be a number within the range [1900,2023].`;
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
    if (!ObjectId.isValid(id)) throw 'Error: Invalid object ID';
    const bandCollection = await bands();
    const band = await bandCollection.findOne({ _id: ObjectId(id) });
    if (band === null) throw `Error: Band not found with ID ${id}.`;

    return band;
};

const create = async function create(bandId, title, releaseDate, tracks, rating) {

    // Error Checking
    checkNumOfArgs(arguments,5,5);
    checkIsProper(bandId, 'string', 'bandId');
    bandId = bandId.trim();
    // apparently this is a better check than ObjectId.isValid(), according to
    // https://stackoverflow.com/questions/13850819/can-i-determine-if-a-string-is-a-mongodb-objectid
    if(bandId != new ObjectId(bandId)) throw `Error: Band ID is not a valid ObjectId.`;
    checkIsProper(title, 'string', 'title');
    checkIsProper(releaseDate, 'string', 'releaseDate');
    releaseDate = releaseDate.trim();
    checkRelease(releaseDate);
    checkTracks(tracks,'string','tracks');
    checkIsProper(rating,'number','rating');
    checkRating(rating);

    // TODO: Left off here. 
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