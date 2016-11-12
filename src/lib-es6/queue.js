class Queue {
  constructor() {
    this.items = [];
  }

  /**
   * Add an item to the queue
   * @method enqueue
   * @param {Object} item - item to be queued
   * @return {Void}
   */
  enqueue(element) {
    this.items.push(element);
  }

  /**
   * Remove the first a item of the queue, and return it
   * @method dequeue
   * @return {Object} the first item in the queue
   */
  dequeue() {
    return this.items.shift();
  }

  /**
   * Return the first a item of the queue
   * @method front
   * @return {Object} the first item in the queue
   */
  front() {
    return this.items[0];
  }

  /**
   * Check if the queue is empty
   * @method isEmpty
   * @return {Boolean} if the queue is empty or not
   */
  isEmpty() {
    return this.items.length === 0;
  }

  /**
   * Remove all items in the queue
   * @method clear
   * @return {Void}
   */
  clear() {
    this.items = [];
  }

  /**
   * Get the size of the queue
   * @method size
   * @return {Number} the size of the queue
   */
  size() {
    return this.items.length;
  }

  /**
   * Get the queue item in string format
   * @method toString
   * @return {String} The string value of the queue
   */
  toString() {
    return JSON.stringify(this.items);
  }

}

module.exports = Queue;
