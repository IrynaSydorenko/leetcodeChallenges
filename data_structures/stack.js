// Stack implementation (Linked lists)
console.log('Topic: ', 'Stack');

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length < 1) {
      this.top = newNode;
      this.bottom = newNode;
      this.length++;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
      this.length++;
    }
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    let savedTopVariable = this.top;
    this.top = savedTopVariable.next;
    this.length--;
    return savedTopVariable;
  }

  //isEmpty
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack);
