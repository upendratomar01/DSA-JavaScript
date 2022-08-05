// TC - Insertion - O(1)
// TC - Removal   - O(1)
// TC - Access    - O(1)
// TC - WORST     - O(n) ALL

class HashTable {
  // prime number size
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let RANDOM_PRIME = 37;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let val = char.charCodeAt(0) - 96;
      total = (total * RANDOM_PRIME + val) % this.keyMap.length;
    }
    return total;
  }

  set(key, val) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, val]);
  }
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap.length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }
}

let ht = new HashTable(17);
ht.set("john", "doe");
ht.set("i love", "dogs");
ht.set("color", "white");
ht.set("phone", "apple");
ht.set("sky", "blue");
ht.set("harry", "potter");
ht.set("read", "books");
console.log(ht);
console.log(ht.get("read"));
