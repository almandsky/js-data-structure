import Queue from '../src/lib-es6/queue';

const { expect } = require('chai');

describe('Queue Test', () => {
  it('should enqueue an item to the queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    expect(queue.items[0]).to.equal(1);
    expect(queue.items[1]).to.equal(2);
    expect(queue.items[2]).to.equal(3);
    expect(queue.items[3]).to.equal(4);
  });

  it('should dequeue an item from the queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    const result = queue.dequeue();
    expect(result).to.equal(1);
    const result2 = queue.dequeue();
    expect(result2).to.equal(2);
  });

  it('should get the front item of the queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    const result = queue.front();
    expect(result).to.equal(1);
    const result2 = queue.front();
    expect(result2).to.equal(1);
  });

  it('should check if the queue is empty', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).to.equal(true);
    queue.enqueue(1);
    expect(queue.isEmpty()).to.equal(false);
    const result = queue.dequeue();
    expect(result).to.equal(1);
    expect(queue.isEmpty()).to.equal(true);
  });

  it('should clear the queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    expect(queue.isEmpty()).to.equal(false);

    queue.clear();
    expect(queue.isEmpty()).to.equal(true);
  });

  it('should get the size of the queue', () => {
    const queue = new Queue();
    expect(queue.size()).to.equal(0);
    queue.enqueue(1);
    expect(queue.size()).to.equal(1);
    queue.enqueue(2);
    expect(queue.size()).to.equal(2);
    queue.enqueue(3);
    expect(queue.size()).to.equal(3);
    queue.enqueue(4);
    expect(queue.size()).to.equal(4);

    queue.clear();
    expect(queue.size()).to.equal(0);
  });

  it('should get the string version of the queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);

    expect(queue.toString()).to.deep.equal('[1,2,3,4]');
  });
});
