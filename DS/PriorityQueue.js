// TC - Insertion - O(log(n))
// TC - Removal   - O(log(n))
// TC - Searching - O(n)
// Priority Is an implementation of Binary Heap (either min or max)

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}
// MinBinaryHeap
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  _bubbleUp() {
    let index = this.values.length - 1;
    let node = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parentNode = this.values[parentIndex];
      if (node.priority >= parentNode.priority) break;
      this.values[parentIndex] = node;
      this.values[index] = parentNode;
      index = parentIndex;
    }
  }

  _sinkDown() {
    let index = 0;
    let node = this.values[index];
    let length = this.values.length;
    while (true) {
      let leftIndex = 2 * index + 1;
      let rightIndex = 2 * index + 2;
      let swap = null;
      let leftNode, rightNode;

      if (leftIndex < length) {
        leftNode = this.values[leftIndex];
        if (leftNode.priority < node.priority) swap = leftIndex;
      }
      if (rightIndex < length) {
        rightNode = this.values[rightIndex];
        if (
          (swap === null && rightNode < node.priority) ||
          (swap !== null && rightNode < leftNode.priority)
        )
          swap = rightIndex;
      }
      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = node;

      return this;
    }
  }

  enqueue(val, priority) {
    let node = new Node(val, priority);
    this.values.push(node);
    this._bubbleUp();
    return node;
  }

  dequeue() {
    let min = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this._sinkDown();
    }
    return min;
  }
}

let ER = new PriorityQueue();
ER.enqueue("normal cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken leg", 2);
ER.enqueue("glass in arm", 3);
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER);
