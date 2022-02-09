const axios = require('axios');
const people = require('./people');

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

async function getStocks() {
    const {data} = await axios.get('https://gist.githubusercontent.com/graffixnyc/8c363d85e61863ac044097c0d199dbcc/raw/7d79752a9342ac97e4953bce23db0388a39642bf/stocks.json');
    return data;
}

const listShareholders = async function listShareholders(stockName) {
    checkNumOfArgs(arguments,1,1);
    checkIsProper(stockName,'string', 'stockName');
    stockName = stockName.trim();

    let stocks = await getStocks();
    let stock = stocks.find((stock) => stock.stock_name == stockName);
    if(!stock) throw `Error: ${stockName} is not a valid stock name.`;
    
    let peeps = [];
    for (const shareholder of stock.shareholders) {
        let person = await people.getPersonById(shareholder.userId);
        peeps.push({
            'first_name':person.first_name,
            'last_name':person.last_name,
            'number_of_shares':shareholder.number_of_shares
        });
    }
    return {
        'id': stock.id,
        'stock_name': stock.stock_name,
        'shareholders': peeps
    };
}

const totalShares = async function totalShares(stockName) {
    checkNumOfArgs(arguments,1,1);
    checkIsProper(stockName,'string', 'stockName');
    stockName = stockName.trim();

    let stocks = await getStocks();
    let stock = stocks.find((stock) => stock.stock_name == stockName);
    if(!stock) throw `Error: ${stockName} is not in stock directory.`;

    if (stock.shareholders.length == 0) return `${stockName} currently has no shareholders.`;
    let sum = 0;
    for (let i = 0; i < stock.shareholders.length; i++) {
        sum += stock.shareholders[i].number_of_shares;
    }
    return (stock.shareholders.length == 1) 
        ? `${stockName}, has ${stock.shareholders.length} shareholder that owns a total of ${sum} shares.`
        : `${stockName}, has ${stock.shareholders.length} shareholders that own a total of ${sum} shares.`;
}

const listStocks = async function listStocks(firstName, lastName) {
    checkNumOfArgs(arguments,2,2);
    checkIsProper(firstName,'string','firstName');
    checkIsProper(lastName,'string','lastName');
    firstName = firstName.trim();
    lastName = lastName.trim();

    let peeps = await getPeople();
    let target = peeps.find((person) => person.first_name == firstName && person.last_name == lastName);
    if (!target) throw `Error: ${firstName} ${lastName} is not in people directory.`;

    let portfolio = [];
    let stocks = await getStocks();
    for(const stock of stocks) {
        let shareholder = stock.shareholders.find((shareholder) => shareholder.userId == target.id);
        if(shareholder) {
            portfolio.push({
                'stock_name': stock.stock_name,
                'number_of_shares': shareholder.number_of_shares
            });
        }
    }
    if (portfolio.length < 1) throw `Error: ${firstName} ${lastName} is not a shareholder in any stocks.`;
    return portfolio;
}

const getStockById = async function getStockById(id) {
    checkNumOfArgs(arguments,1,1);
    checkIsProper(id,'string','ID');
    id = id.trim();

    let stocks = await getStocks();
    let target = stocks.find((stock) => stock.id == id);
    if(!target) throw `Error: Stock with id "${id}" not found.`;
    return target;
}

module.exports = {
    firstName: "Aughdon", 
    lastName: "Breslin", 
    studentId: "10447694",
    listShareholders,
    totalShares,
    listStocks,
    getStockById
};
