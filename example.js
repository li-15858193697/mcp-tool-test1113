// JavaScript example file
function calculateSum(a, b) {
    return a + b;
}

class Calculator {
    constructor() {
        this.result = 0;
    }
    
    add(value) {
        this.result += value;
        return this;
    }
    
    subtract(value) {
        this.result -= value;
        return this;
    }
    
    getResult() {
        return this.result;
    }
}

module.exports = { calculateSum, Calculator };
