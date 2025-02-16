//  Arrays
console.log('Topik: ', 'Arrays');

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(value) {
    this.data[this.length] = value;
    this.length += 1;
    return this.data[this.length - 1];
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    // this.pop();
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const array = new MyArray();
console.log(array);
array.push(1);
array.push(2);
array.push(3);
array.push(4);
array.push(5);
array.push(6);
const firstElement = array.get(0);
const secondElement = array.get(1);

console.log(
  'First element: ',
  firstElement,
  'Second element: ',
  secondElement,
  array
);
array.delete(3);
console.log(array);

// [1, 2, 3, 4, 5, 6]
//  0  1  2  3  4  5

//  [1, 2, 3, , 5, 6]
//   0  1  2  3  4  5

//  [1, 2, 3, 5, 6]
//   0  1  2  3  4
