const people = require('./people');
const stocks = require('./stocks');

async function main(){
    console.log("getPersonById Testing:");
    try {
        console.log(await people.getPersonById());
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(await people.getPersonById(" "));
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(await people.getPersonById(-1));
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(await people.getPersonById("a"));
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(await people.getPersonById("20035a09-3820-4f49-bb8f-d947cebee537"));
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(await people.getPersonById("7989fa5e-8f3f-458d-ad58-23c8d9ef5a10"));
    } catch (e) {
        console.log(e);
    }

    console.log();

    console.log("sameEmail Testing:");
    try {
        console.log(await people.sameEmail());
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(await people.sameEmail(" "));
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(await people.sameEmail("a"));
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(await people.sameEmail(2));
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(await people.sameEmail("harvard."));
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(await people.sameEmail(".edu"));
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(await people.sameEmail("a.23"));
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(await people.sameEmail("google.com.hk"));
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(await people.sameEmail("harvard.edu"));
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(await people.sameEmail("HARVARD.EDU"));
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(await people.sameEmail("icq.com"));
    } catch (e) {
        console.log(e);
    }

    console.log();

    console.log("manipulateIp Testing:");
    try {
        console.log(await people.manipulateIp(1));
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(await people.manipulateIp());
    } catch (e) {
        console.log(e);
    }

    console.log();

    console.log("sameBirthday Testing:");
    try {
        console.log(await people.sameBirthday());
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(await people.sameBirthday(NaN,1));
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(await people.sameBirthday("cow",1));
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(await people.sameBirthday(" 0 ","12"));
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(await people.sameBirthday(1.9,"0"));
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(await people.sameBirthday(1,32));
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(await people.sameBirthday(2,29));
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(await people.sameBirthday(3,32));
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(await people.sameBirthday(4,31));
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(await people.sameBirthday(1,1));
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(await people.sameBirthday(12,12));
    } catch (e) {
        console.log(e);
    }

    console.log();

    console.log("listShareholders Testing:");
    try {
        console.log(await stocks.listShareholders());
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(await stocks.listShareholders(1));
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(await stocks.listShareholders("   "));
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(await stocks.listShareholders("pp"));
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(await stocks.listShareholders("Aeglea BioTherapeutics, Inc."));
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(await stocks.listShareholders("Powell Industries, Inc."));
    } catch (e) {
        console.log(e);
    }

    console.log();

    console.log("totalShares Testing:");
    try {
        console.log(await stocks.totalShares());
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(await stocks.totalShares(1));
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(await stocks.totalShares("          "));
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(await stocks.totalShares("pp"));
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(await stocks.totalShares("Aeglea BioTherapeutics, Inc."));
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(await stocks.totalShares('Nuveen Preferred and Income 2022 Term Fund'));
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(await stocks.totalShares("Powell Industries, Inc."));
    } catch (e) {
        console.log(e);
    }

    console.log();

    console.log("listStocks Testing:");
    try {
        console.log(await stocks.listStocks());
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(await stocks.listStocks("pp"));
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(await stocks.listStocks("pp","poopoo"));
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(await stocks.listStocks("Grenville", "Pawelke"));
    } catch (e) {
        console.log(e);
    }

    console.log();

    console.log("getStockById Testing:");
    try {
        console.log(await stocks.getStockById());
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(await stocks.getStockById(2));
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(await stocks.getStockById("        "));
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(await stocks.getStockById("pp"));
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(await stocks.getStockById("f652f797-7ca0-4382-befb-2ab8be914ff0"));
    } catch (e) {
        console.log(e);
    }
}
main();