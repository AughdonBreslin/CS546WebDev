
// async function myRide() {
//     return 'Honda CR-V';
// }

// function yourRide() {
//     return Promise.resolve('Honda CR-V');
// }

// function foo() {
//     return Promise.reject('Rejected');
// }

// async function bar() {
//     throw 'Rejected';
// }

const weather = true;

async function date() {
    if (weather) {
        const dateDetails = {
            name: 'Cubana Restaurant',
            location: '55th Street',
            table: 5
        };
        return dateDetails;
    } else {
        throw 'Bad weather so no date'
    }
}

const orderUber = async (details) => {
    const message = `Get me an Uber ASAP to ${details.location}, we are going on a date.`;
    return message;
}

async function myDate() {
    try {
        let dateDetails = await date();
        let message = await orderUber(dateDetails);
        console.log(message);
    } catch (e) {
        console.log(e);
    }
}

myDate();
console.log("My date has been called.");