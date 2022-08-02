class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let popNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popNode.prev;
      this.tail.next = null;
      popNode.prev = null;
    }
    this.length--;
    return current;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    let oldNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldNode.next;
      this.head.prev = null;
      oldNode.next = null;
    }
    this.length--;
    return oldNode;
  }

  get(index) {
    if (index < 0 || index > this.length) return null;
    let counter, current;
    if (index <= this.length / 2) {
      counter = 0;
      current = this.head;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      current = this.tail;
      while (counter !== index) {
        current = current.prev;
        counter--;
      }
    }
    return current;
  }

  set(index, val) {
    let node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index >= this.length) return false;
    if (index === this.length - 1) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    let newNode = new Node(val);
    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;
    newNode.next = prevNode.next;
    newNode.prev = prevNode;
    prevNode.next = newNode;
    nextNode.prev = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === this.length - 1) return !!this.pop();
    if (index === 0) return !!this.shift();
    let removeNode = this.get(index);
    let prevNode = removeNode.prev;
    let nextNode = removeNode.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    removeNode.next = null;
    removeNode.prev = null;
    this.length--;
    return true;
  }
}
