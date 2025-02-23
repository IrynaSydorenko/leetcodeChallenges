// Linked List
console.log('Topik: ', 'Linked List');
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
    // let current = this.head;
    // while (current.next) {
    //   current = current.next
    // }
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head; // creating the pointer
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.traversetoindex(index - 1);
    const holdingPoint = leader.next;
    leader.next = newNode;
    newNode.next = holdingPoint;
    this.length++;
    return this.printList;
  }

  traversetoindex(index) {
    let counter = 0;
    const currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    const leader = this.traversetoindex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    length--;
    return this;
  }
  reverce() {
    // [1, 10, 16, 88]
    if (!this.head || !this.head.next) {
      return this;
    }
    let first = this.head;
    let second = first.next;

    this.tail = this.head;
    this.tail.next = null;

    while (second) {
      const temp = second.next; // Зберігаємо посилання на наступний елемент
      second.next = first; // Змінюємо напрямок посилання
      first = second; // Переміщаємо `first` вперед
      second = temp; // Переміщаємо `second` вперед
    }

    this.head = first; // Змінюємо голову списку
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(1, 99);
myLinkedList.remove(1);
myLinkedList.reverce();
console.log(myLinkedList.printList());
console.log(myLinkedList);
