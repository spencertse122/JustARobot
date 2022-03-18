
// Strict mode
function canYouSpotTheProblem() {
    "use strict";
    // for (counter = 0; counter < 10; counter++) {
    for (let counter = 0; counter < 10; counter++) {
        console.log("Happy happy");
    }
}

canYouSpotTheProblem()
console.log('-'.repeat(10))

// this is BADD!!!!!!!!!

// let's say we have a function
// it tutrns into an object by accident
// this.name will refer to global
function Person(name) { this.name = name ;}
let ferdinand = Person("Ferdinand");
// now when we do name
// it's showing up, it changes the global definition
// of the name
console.log(name)
