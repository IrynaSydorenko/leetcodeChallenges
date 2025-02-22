// Hash Table
console.log('Topik: ', 'Hash Table');
class HashTable {
  constructor(size) {
    this.data = new Array(size);
    console.log('Data length: ', this.data.length);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      // console.log(hash);
    }
    console.log('Hash: ', hash);
    return hash;
  }

  set(key, value) {
    // [[[key, value]],[[key, value]]]
    const hashedKey = this._hash(key);

    if (!this.data[hashedKey]) {
      this.data[hashedKey] = []; //// Ініціалізуємо бакет для обробки колізій
    }

    this.data[hashedKey].push([key, value]); // // Додаємо пару [key, value] до бакета
    console.log('This data: ', this.data);
  }

  get(key) {
    const hashedKey = this._hash(key);
    const bucket = this.data[hashedKey];
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1];
        }
      }
    }
    return undefined; // Якщо ключ не знайдено
  }

  keys() {
    // [[[key, value]],[[key, value]]] - так виглядає наша структура даних
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        if (this.data[i].length === 1) {
          keysArray.push(this.data[i][0][0]);
        } else if (this.data[i].length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            keysArray.push(this.data[i][j][0]);
          }
        }
      }
    }
    console.log('Keys Array: ', keysArray);
    return keysArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.get('grapes');
myHashTable.set('apples', 9);
myHashTable.get('apples');
myHashTable.keys();
