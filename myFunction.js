// Export the function so we can import/require it in another file
exports.sum = (a, b) => {
    // Function is named sum with parameters a and b
    return a+b;
}

exports.subtract = (a,b) => {
    return a-b;
}

/* Javascript ES6 Syntax Above
/* An equivalent way to do this would be:

function sum(a, b){
    return a+b;
}

function subtract(a, b){
    return a-b;
}

exports.sum = sum;
exports.subtract = subtract;

*/