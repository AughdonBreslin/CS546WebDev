const weather = true;

// const date = new Promise((resolve, reject) =>{ // dont put () on date at bottom
//     if (weather){
//         const dateDetails = {
//             name: 'Sparks Steakhouse',
//             location: '55th Street',
//             table: 5
//         };
//         resolve(dateDetails)
//     } else {
//         reject('bad weather so no date');
//     }
// });

function date () { //have to put () on date at bottom
    if (weather){
        const dateDetails = {
            name: 'Sparks Steakhouse',
            location: '55th Street',
            table: 5
        };
        return Promise.resolve(dateDetails);
    } else {
        return Promise.reject('bad weather so no date');
    }
}

const orderUber = (details) => {
    let message = `Get me an Uber ASAP to ${details.location}, we are going on a date.`;
    return Promise.resolve(message);
}
const myDate = () => {
    date()
    .then(orderUber)
    .then((orderUberMessage) => {
        console.log(orderUberMessage);
    })
    .catch((error) => {
        console.log(error);
    });
}

// const myDate = () => {
//     date().then((details) => {
//         console.log(details);
//     })
//     .then(() => {
//         console.log('After promise');
//     })
//     .catch ((error) => {
//         console.log(error);
//     });
// }

myDate();
console.log("My date has been called.");