// TC - Insertion - O(log(n))
// TC - Removal   - O(log(n))
// TC - Searching - O(n)

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  _bubbleUp() {
    let index = this.values.length - 1;
    let val = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parentVal = this.values[parentIndex];
      if (val <= parentVal) break;
      this.values[parentIndex] = val;
      this.values[index] = parentVal;
      index = parentIndex;
    }
  }

  _sinkDown() {
    let index = 0;
    let val = this.values[index];
    let length = this.values.length;
    while (true) {
      let leftIndex = 2 * index + 1;
      let rightIndex = 2 * index + 2;
      let swap = null;
      let leftVal, rightVal;

      if (leftIndex < length) {
        leftVal = this.values[leftIndex];
        if (leftVal > val) swap = leftIndex;
      }
      if (rightIndex < length) {
        rightVal = this.values[rightIndex];
        if (
          (swap === null && rightVal > val) ||
          (swap !== null && rightVal > leftVal)
        )
          swap = rightIndex;
      }
      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = val;

      return this;
    }
  }

  insert(val) {
    this.values.push(val);
    this._bubbleUp();
    return val;
  }

  extractMax() {
    let max = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this._sinkDown();
    }
    return max;
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap);
console.log(heap.extractMax());
console.log(heap);
