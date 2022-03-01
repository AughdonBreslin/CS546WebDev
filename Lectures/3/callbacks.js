
// console.log("Plant corn");

// setTimeout(()=>{
//     console.log("Water corn");
// }, 1200);

// console.log("Add fertilizer");
// console.log('foobar');

// setInterval(() => {
//     console.log('hello');
// }, 1000);

// console.log('goodbye');

// const list = ['man', 'woman', 'child'];
// const kindList = list.map((element) => {
//     return element + 'kind';
// });

// kindList.forEach((element) => {
//     console.log(element);
// });

// function greeting(name) {
//     return `Hello ${name}, welcome to CS546!`;
// }

// function introduction(firstName, lastName, callBack) {
//     const fullName = `${firstName} ${lastName}`;
//     console.log(callBack(fullName));
// }

// introduction("Aughdon", "Breslin", greeting);

function study (subject, callback) {
    console.log(`I'm about to study ${subject}.`);
    callback(subject);
}

function afterStudy(subject) {
    console.log(`I'm done studying ${subject}. Now it's time to party!`);
}

study("Web Programming", afterStudy);
study("MongoDB", (subject) => {
    console.log(`I have studied too much ${subject} and I am tired.`);
})