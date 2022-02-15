const { get } = require('./data/bands');
const bands = require('./data/bands');

async function main(){
    try {
        console.log("1. Create a band of your choice.");
        let band1 = await bands.create("pp",["extra wacky","super grid"],"http://www.schulp.com", "Recordius", ["Paul McCartney", "Brawl MtNomney", "Mitt Romney"], 1909);

        console.log("2. Log the newly created band. (Just that band, not all bands)");
        console.log(band1);

        console.log("3. Create another band of your choice.");
        let band2 = await bands.create("Qack",["much more normal", "not anything specific"], "http://www.buyqack.com", "Don't Recordius", ["Also Paul McCartney", "Saul Somnie", "Raul Ricarde"], 2021);

        console.log("4. Query all bands, and log them all");
        console.log(await bands.getAll());

        console.log("5. Create the 3rd band of your choice.");
        let band3 = await bands.create("The Third One", ["Something","About","Three"], "http://www.three.com", "ThirdInc", ["One","Two","Three"],1933);

        console.log("6. Log the newly created 3rd band. (Just that band, not all bands)");
        console.log(band3);

        console.log("7. Rename the first band.");
        let renamedBand1 = await bands.rename(band1._id.toString(),"actually still pp");

        console.log("8. Log the first band with the updated name.");
        console.log(renamedBand1);

        console.log("9. Remove the second band you created.");
        let deletedBand2 = await bands.remove(band2._id.toString());

        console.log("10. Query all bands, and log them all.");
        console.log(await bands.getAll());

    } catch(e) {
        console.log(e);
    }
    try {
        console.log("11. Try to create a band with bad input parameters to make sure it throws errors.");
        let badBand = await bands.create("fine","bad","bad","fine","bad","bad");
    } catch(e) {
        console.log(e);
    }
    try {
        console.log("12. Try to remove a band that does not exist to make sure it throws errors.");
        let badBand = await bands.remove("420bad38692f7dadf9c06d99");
    } catch(e) {
        console.log(e);
    }
    try {
        console.log("13. Try to rename a band that does not exist to make sure it throws errors.");
        let badBand = await bands.rename("420bad38692f7dadf9c06d99","foopy");
    } catch(e) {
        console.log(e);
    }
    try {
        console.log("14. Try to rename a band passing in invalid data for the newName parameter to make sure it throws errors.");
        let badBand = await bands.rename("420bad38692f7dadf9c06d99",19);
    } catch(e) {
        console.log(e);
    }
    try {
        console.log("15. Try getting a band by ID that does not exist to make sure it throws errors.");
        let badBand = await bands.get("420bad38692f7dadf9c06d99");
    } catch(e) {
        console.log(e);
    }


    // console.log("create Testing:");
    // try {
    //     console.log(await bands.create());
    // } catch (e) {
    //     console.log(e);
    // }
    // try {
    //     console.log(await bands.create("","","","","",""));
    // } catch (e) {
    //     console.log(e);
    // }
    // try {
    //     console.log(await bands.create("n",["a",8],"","","",""));
    // } catch (e) {
    //     console.log(e);
    // }
    // try {
    //     console.log(await bands.create("n",["a","b"],"w","","",""));
    // } catch (e) {
    //     console.log(e);
    // }
    // try {
    //     console.log(await bands.create("n",["a","b"],"http://www.","","",""));
    // } catch (e) {
    //     console.log(e);
    // }
    // try {
    //     console.log(await bands.create("n",["a","b"],"http://www..com","","",""));
    // } catch (e) {
    //     console.log(e);
    // }
    // try {
    //     console.log(await bands.create("a",["a","b"],"http://www.abcde.com",3,"",""));
    // } catch (e) {
    //     console.log(e);
    // }
    // try {
    //     console.log(await bands.create("a",["a","b"],"http://www.abcde.com","r","",""));
    // } catch (e) {
    //     console.log(e);
    // }
    // try {
    //     console.log(await bands.create("a",["a","b"],"http://www.abcde.com","r",[],""));
    // } catch (e) {
    //     console.log(e);
    // }
    // try {
    //     console.log(await bands.create("a",["a","b"],"http://www.abcde.com","r",["b"],""));
    // } catch (e) {
    //     console.log(e);
    // }
    // try {
    //     console.log(await bands.create("a",["a","b"],"http://www.abcde.com","r",["b"],NaN));
    // } catch (e) {
    //     console.log(e);
    // }
    // try {
    //     console.log(await bands.create("a",["a","b"],"http://www.abcde.com","r",["b"],1899));
    // } catch (e) {
    //     console.log(e);
    // }
    // try {
    //     console.log(await bands.create("a",["a","b"],"http://www.abcde.com","r",["b"],2023));
    // } catch (e) {
    //     console.log(e);
    // }
    // try {
    //     console.log(await bands.create("a",["a","b"],"http://www.abcde.com","r",["b"],1900.5));
    // } catch (e) {
    //     console.log(e);
    // }
    // try {
    //     console.log(await bands.create("b",["g"],"http://www.abcde.com","r",["b"],2000));
    // } catch (e) {
    //     console.log(e);
    // }

    // console.log();
    // console.log("getAll Testing:");
    // try {
    //     console.log(await bands.getAll(2));
    // } catch (e) {
    //     console.log(e);
    // }
    // try {
    //     console.log(await bands.getAll());
    // } catch (e) {
    //     console.log(e);
    // }

    // console.log();

    // console.log("get Testing:");
    // try {
    //     console.log(await bands.get());
    // } catch (e) {
    //     console.log(e);
    // }
    // try {
    //     console.log(await bands.get(2));
    // } catch (e) {
    //     console.log(e);
    // }
    // try {
    //     console.log(await bands.get("im12charlong"));
    // } catch (e) {
    //     console.log(e);
    // }
    // try {
    //     console.log(await bands.get("620a834c502f4d2eb58ea93c"));
    // } catch (e) {
    //     console.log(e);
    // }
    // try {
    //     console.log(await bands.get("620a86af5b022ab622e955b2"));
    // } catch (e) {
    //     console.log(e);
    // }

    // console.log();

    // console.log("remove Testing:");
    // try {
    //     console.log(await bands.remove());
    // } catch (e) {
    //     console.log(e);
    // }
    // try {
    //     console.log(await bands.remove(2));
    // } catch (e) {
    //     console.log(e);
    // }
    // try {
    //     console.log(await bands.remove("im12charlong"));
    // } catch (e) {
    //     console.log(e);
    // }
    // try {
    //     console.log(await bands.remove("620a834c502f4d2eb58ea93c"));
    // } catch (e) {
    //     console.log(e);
    // }
    // try {
    //     console.log(await bands.remove("620a868372a47e47e62c4acb"));
    // } catch (e) {
    //     console.log(e);
    // }
    // console.log();

    // console.log("rename Testing:");
    // try {
    //     console.log(await bands.rename());
    // } catch (e) {
    //     console.log(e);
    // }
    // try {
    //     console.log(await bands.rename(1,2));
    // } catch (e) {
    //     console.log(e);
    // }
    // try {
    //     console.log(await bands.rename("",2));
    // } catch (e) {
    //     console.log(e);
    // }
    // try {
    //     console.log(await bands.rename("A",2));
    // } catch (e) {
    //     console.log(e);
    // }
    // try {
    //     console.log(await bands.rename("a","pp"));
    // } catch (e) {
    //     console.log(e);
    // }
    // try {
    //     console.log(await bands.rename("620a86af5b022ab622e955b2","pp"));
    // } catch (e) {
    //     console.log(e);
    // }
}
main();