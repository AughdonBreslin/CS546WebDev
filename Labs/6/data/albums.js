const mongoCollections = require('../config/mongoCollections');
const bands = mongoCollections.bands;
const { ObjectId } = require('mongodb');
const { ObjectID } = require('bson');
const data = require('.');
const bandData = data.bands;

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
    if (date.length != 10) throw `Error: Release date must be in form 'MM/DD/YYYY'.`;
    let year = parseInt(date.substr(-4));
    if (isNaN(year) || !Number.isInteger(year) || year < 1900 || year > 2023) throw `Error: Year must be a number within the range [1900,2023].`;
}
function checkRating(rating) {
    if(rating < 1 || rating > 5) throw `Error: Rating must be a number within the range [1,5].`;
}

function trimArray(array) {
    for (i in array) {
        array[i] = array[i].trim();
    }
    return array;
}

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

    // Trimming
    title = title.trim();
    tracks = trimArray(tracks);

    // Get database and create entry
    const bandCollection = await bands();
    if(!bandCollection) throw `Error: Could not find bandCollection.`;

    // Create new album for the band we have to find
    let newAlbum = {
        _id: new ObjectId(),
        title: title,
        releaseDate: releaseDate,
        tracks: tracks,
        rating: rating
    };
    
    // Find band and add album into band's album field
    const band = await bandCollection.findOneAndUpdate({_id: ObjectId(bandId)}, {$push:{albums: newAlbum}});
    if(!band) throw `Error: Band not found with ID ${bandId}.`;
    band.value._id = band.value._id.toString();
    newAlbum._id = newAlbum._id.toString();
    
    return newAlbum;
}

const getAll = async function getAll(bandId) {
    checkNumOfArgs(arguments,1,1);
    checkIsProper(bandId,'string','bandId');
    bandId = bandId.trim();
    if(bandId != new ObjectId(bandId)) throw `Error: Band ID is not a valid ObjectId.`;
    
    // band not found is already handled within get, and albums is always initialized to []
    const bandCollection = await bands();
    if(!bandCollection) throw `Error: Could not find bandCollection.`;

    const band = await bandCollection.findOne({_id: ObjectId(bandId)});
    if(!band) throw `Error: Band not found with ID ${bandId}.`;
    let albums = band.albums;

    return albums;
}
// We can query on subdocuments very easily
// findByDirector: async (directorName) => {
//     if (!directorName) throw 'You must provide a director name';
//     const movieCollection = await movies();
//     // to query on a subdocument field, just provide the path to the field as a string key;
//     // so when you have {info: {director: someName}}, just find on {"info.director": someName}
//     return await movieCollection
//       .find({ 'info.director': directorName })
//       .toArray();
//   },
const get = async function get(albumId) {
    checkNumOfArgs(arguments,1,1);
    checkIsProper(albumId,'string','albumId');
    albumId = albumId.trim();
    if(albumId != new ObjectId(albumId)) throw `Error: Album ID is not a valid ObjectId.`;

    let bandCollection = await bands();
    const band = await bandCollection.findOne({'albums._id':ObjectId(albumId)});
    if(!band) throw `Error: Band not found with album ID ${albumId}.`;
    band._id = band._id.toString();

    // go through albums list, find the album whose id matches albumId
    const album = await band.albums.find(alb => alb._id.equals(albumId));
    if(!album) throw `Error: Somehow a band was found containing this album ID yet the album itself wasnt found?`;
    album._id = album._id.toString();

    return album;
}

const remove = async function remove(albumId) {
    checkNumOfArgs(arguments,1,1);
    checkIsProper(albumId,'string',);
    albumId = albumId.trim();
    if(albumId != new ObjectId(albumId)) throw `Error: Album ID is not a valid ObjectId.`;
    
    let bandCollection = await bands();
    const band = await bandCollection.findOneAndUpdate({'albums._id':ObjectId(albumId)},
                                        {$pull:{albums:{_id: ObjectId(albumId)}}});
    if(!band.value) throw `Error: Band not found with album ID ${albumId}.`;
    const newBand = await bandCollection.findOne({_id:band.value._id});
    newBand._id = newBand._id.toString();
    return newBand;
}

const updateOverall = async function updateOverall(bandId) {
    checkNumOfArgs(arguments,1,1);
    checkIsProper(bandId,'string','bandId');
    bandId = bandId.trim();
    if(bandId != new ObjectId(bandId)) throw `Error: Band ID is not a valid ObjectId.`;

    let bandCollection = await bands();
    const band = await bandCollection.findOne({_id: ObjectId(bandId)});
    if(!band) throw `Error: Band not found with ID ${bandId}.`;
    let totRating = 0;
    for (const album of band.albums){
        totRating += album.rating;
    }
    totRating /= band.albums.length;
    const newband = await bandCollection.findOneAndUpdate({_id: ObjectId(bandId)},
                                        {$set:{overallRating: totRating}});
    if(!newband.value) throw `Error: Band not found with ID ${bandId}.`;
    return totRating;
}

module.exports = {
    firstName: "Aughdon",
    lastName: "Breslin",
    studentId: "10447694",
    create,
    getAll,
    get,
    remove,
    updateOverall
    // updateOverallButForAlbumId
}