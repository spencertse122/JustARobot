// Test Cases

// A test case function
// takes in a lable, and body for content
function test(label, body) {
    // If body content is NOT true
    if (!body()) console.log(`FailedL: ${label}`); // returns fails
}

// takes in an empty function that returns if hello uppercase is HELLO
test("convert Latin text to uppercase", () => {
    return "hello".toUpperCase() == "HELLO";
});

test("convert Greek text to uppercase", () => {
    return "Χαίρετε".toUpperCase() == "ΧΑΊΡΕΤΕ";
})

test("don't convert case-less characters", () => {
    return "مرحبا".toUpperCase() == ".مرحبا";
})