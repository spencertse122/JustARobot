function numberToString(n, base = 10) {
    let result = "", sign = "";
    if (n < 0) {
        sign = "-";
        n = -n;
    }   
    do {
        console.log(`N is ${n}, about to run`)
        result = String(n % base) + result;
        // n /= base; // this is buggy
        // what we really want should be 
        n = Math.floor(n/base)

    } while (n > 0);
    return sign + result;
}

console.log(numberToString(13, 10));


// Error Propagation
// function Number(someInput) {
//     return parseInt(someInput)
// }

// // these are pseudo code
// // in node, it doesn't have Number() and prompt()
// function promptNumber(question) {
//     let result = Number(prompt(question));
//     if (Number.isNaN(result)) return null;
//     else return result;
// }

// console.log(promptNumber("How many trees do you see?"))

// // other scenario

function lastElement(array) {
    if (array.length == 0){
        return {failed: true};
    } else {
        return {element: array[array.length - 1]};
    }
}

// setting a new array
let testArray = [2,5,6,2,3,7]
// see if it works
console.log(lastElement(testArray))
// see if it doesn't work, giving an empty array
console.log(lastElement([]))

// Exceptions

// Obstacle setting and catch

// Pseudo Code

function promptDirection(question) {
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new Error("Invalid direction: " + result);
}

function look() {
    if (promptDirection("Which way?") == "L") {
        return "a house";
    } else {
        return "two angry bears";
    }
}

try {
    console.log("You see", look());
} catch (error) {
    console.log("something went wrong: " + error);
}

// CLEANING UP AFTER EXCEPTIONS

// bad banking code

// setting a dictionary of account and balance
const accounts = {
    a: 100,
    b: 0,
    c: 20
};

function getAccount() {
    // prompting user what account they want to look at
    let accountName = prompt("Enter an account name");
    // if the account name doesn't exists in the accounts dictionary
    if (!accounts.hasOwnProperty(accountName)) {
        throw new Error(`No such account: ${accountName}`);
        // throw new error
    }
    return accountName;
}

function transfer(from, account) {
    if (accounts[from] < amount) return;
    accounts[from] -= amount;
    accounts[getAccount()] += amount;
}

console.log(accounts["a"])