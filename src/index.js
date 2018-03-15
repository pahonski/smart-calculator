class SmartCalculator {
    constructor(initialValue) {
        // your implementation
        this.array = [initialValue];
    }

    add(number) {
        // your implementation
        this.array.push('+', number);
        return this;
    }

    subtract(number) {
        // your implementation
        this.array.push('-', number);
        return this;
    }

    multiply(number) {
        // your implementation
        this.array.push('*', number);
        return this;
    }

    devide(number) {
        // your implementation
        this.array.push('/', number);
        return this;
    }

    pow(number) {
        // your implementation
        this.array.push('^', number);
        return this;
    }

    result() {
        console.log(this.array);
        return this.array;
    }


}

let example = new SmartCalculator(2);
example.add(2);
example.multiply(2);
example.result();

module.exports = SmartCalculator;
