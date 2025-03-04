// Queues implementation (Linked lists)

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.head;
  }

  enqueue(value) {
    // to add to the queue
    const newNode = new Node(value);
    if (this.length < 1) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    // remoove from the queue, removes from the front of the list
    if (this.length < 1) {
      return null;
    }
    if (this.length === 1) {
      this.last = null;
    } else {
      this.first = this.first.next;
      this.length--;
      return this;
    }
  }
}

const myQueue = new Queue();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavlo');
myQueue.enqueue('Samir');
// myQueue.dequeue();
// myQueue.dequeue();
console.log('myQueue', myQueue);
