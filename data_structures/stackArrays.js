// Stack implementation (arrays)/

class Stack1 {
  constructor() {
    this.array = []; // new Array();
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  push(value) {
    this.array.push(value);
    return this;
  }

  pop() {
    this.array.pop();
    return this;
  }
}

const stackArrayImplementation = new Stack1();
stackArrayImplementation.push(1);
stackArrayImplementation.push(2);
stackArrayImplementation.push(3);
console.log('Stack Array Implementation: ', stackArrayImplementation);
console.log('This: ', stackArrayImplementation.pop());

// ==========================
