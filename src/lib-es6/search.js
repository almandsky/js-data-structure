class Search {

  /**
   * Sequentially search an item in the array
   * Complexity: Θ(n)
   * Space Complexity: O(n)
   * @method sequentialSearch
   * @param {Array} array - input array
   * @param {Object} item - target item to be searched
   * @return {Integer} index of the item if founded
   */
  static sequentialSearch(array, item) {
    if (!array || array.length === 0) {
      return -1;
    }
    for (let i = 0; i < array.length; i += 1) {
      if (item === array[i]) {
        return i;
      }
    }
    return -1;
  }

  /**
   * Binary search an item in the array
   * Complexity: Θ(log(n))
   * Space Complexity: O(n)
   * @method binarySearch
   * @param {Array} array - input array
   * @param {Object} item - target item to be searched
   * @return {Integer} index of the item if founded
   */
  static binarySearch(array, item) {
    if (!array || array.length === 0) {
      return -1;
    }
    let low = 0;
    let high = array.length - 1;
    let mid;
    let element;

    while (low <= high) {
      mid = Math.floor((low + high) / 2);
      element = array[mid];
      if (element < item) {
        low = mid + 1;
      } else if (element > item) {
        high = mid - 1;
      } else {
        return element === item ? mid : -1;
      }
    }

    return -1;
  }
}

module.exports = Search;
