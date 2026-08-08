//queue
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(value) {
    this.items.push(value);
  }
  dequeue() {
    if (this.isEmty()) {
      return undefined;
    }
    return this.items.shift();
  }
  peak() {
    if (this.isEmty()) {
      return undefined;
    }
    return this.items[0];
  }
  isEmty() {
    return this.items.length === 0;
  }
  print() {
    console.log("Start ->", this.items.join("->"), "-> End");
  }
}
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
console.log(queue.peak());
queue.print();
queue.dequeue();
queue.print();
