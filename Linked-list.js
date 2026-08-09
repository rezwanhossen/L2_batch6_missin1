// linked listy implementation
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  append(value) {
    const newNode = new Node(value);
    // if the linked list is emty
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } //if list is not emty
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) {
      console.error("index out of bounderi");
      return undefined;
    }
    //if the insert is in the start of the linked:ist
    if (index == 0) {
      return this.prepend(value);
    }
    // if the insert is in end of list
    if (index == this.length) {
      return this.append(value);
    }
    // if the insert is in meddile of the list
    //find the leading node
    const leadingNode = this._traversToIndex(index - 1);
    const holdingNode = leadingNode.next;
    const newNode = new Node(value);
    leadingNode.next = newNode;
    newNode.next = holdingNode;
    this.length++;
  }
  remove(index) {
    if (index === 0) {
      const remove = this.head.value;
      this.head = this.head.next;
      if (this.length === 1) {
        this.tail = null;
      }
      this.length--;
      return remove;
    }
    const leadingNode = this._traversToIndex(index - 1);
    const nodeToRemove = leadingNode.next;
    leadingNode.next = nodeToRemove.next;
    if (leadingNode.next === null) {
      this.tail = leadingNode;
    }
    return nodeToRemove.value;
  }
  _traversToIndex(index) {
    let count = 0;
    let currentNode = this.head;
    while (count != index) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }
  print() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode != null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(arr.join("->"), "->null");
  }
}
const linkedList = new LinkedList();
linkedList.append(1).append(2).append(3);
// linkedList.prepend(10).prepend(20).prepend(30);
// linkedList.insert(2, 100);
linkedList.print();
linkedList.remove(2);
linkedList.remove(1);
linkedList.remove(0);
linkedList.print();
