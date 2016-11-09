/* eslint no-param-reassign: ["error", { "props": false }] */

class Sorting {

  /**
   * bubble sort
   * Complexity: Θ(n^2)
   * Space Complexity: O(1)
   * @method bubbleSort
   * @param {Array} array - input array
   * @return {Array} sorted array
   */
  static bubbleSort(array) {
    if (!array || !array.length) {
      return array;
    }
    for (let i = 0; i < array.length - 1; i += 1) {
      for (let j = i + 1; j < array.length; j += 1) {
        if (array[i] > array[j]) {
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
    }
    return array;
  }

  /**
   * selection sort
   * Complexity: Θ(n^2)
   * Space Complexity: O(1)
   * @method selectionSort
   * @param {Array} array - input array
   * @return {Array} sorted array
   */
  static selectionSort(array) {
    if (!array || !array.length) {
      return array;
    }
    let indexMin = 0;
    for (let i = 0; i < array.length - 1; i += 1) {
      indexMin = i;
      for (let j = i; j < array.length; j += 1) {
        if (array[indexMin] > array[j]) {
          indexMin = j;
        }
      }
      if (i !== indexMin) {
        const temp = array[i];
        array[i] = array[indexMin];
        array[indexMin] = temp;
      }
    }
    return array;
  }

  /**
   * insertion sort
   * Complexity: Θ(n^2)
   * Space Complexity: O(1)
   * @method insertionSort
   * @param {Array} array - input array
   * @return {Array} sorted array
   */
  static insertionSort(array) {
    if (!array || !array.length) {
      return array;
    }
    let temp = 0;
    let j = 0;
    for (let i = 1; i < array.length; i += 1) {
      j = i;
      temp = array[i];
      while (j > 0 && array[j - 1] > temp) {
        array[j] = array[j - 1];
        j -= 1;
      }
      array[j] = temp;
    }
    return array;
  }

  /**
   * merge sort
   * Complexity: O(n log n)
   * Space Complexity: O(n)
   * @method mergeSort
   * @param {Array} array - input array
   * @return {Array} sorted array
   */
  static mergeSort(array) {
    if (!array || !array.length || array.length === 1) {
      return array;
    }
    const length = array.length;
    const mid = Math.floor(length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid, length);

    return this.merge(this.mergeSort(left), this.mergeSort(right));
  }

  /**
   * merge two arrays, and return a new shorted array
   * @method merge
   * @param {Array} left - first half of the array
   * @param {Array} right - second half of the array
   * @return {Array} sorted array
   */
  static merge(left, right) {
    const result = [];
    let il = 0;
    let ir = 0;

    while (il < left.length && ir < right.length) {
      if (left[il] < right[ir]) {
        result.push(left[il]);
        il += 1;
      } else {
        result.push(right[ir]);
        ir += 1;
      }
    }

    while (il < left.length) {
      result.push(left[il]);
      il += 1;
    }

    while (ir < right.length) {
      result.push(right[ir]);
      ir += 1;
    }

    return result;
  }

  /**
   * quick sort
   * Complexity: O(n log(n))
   * Space Complexity: O(Log(n))
   * @method quickSort
   * @param {Array} array - input array
   * @return {Array} sorted array
   */
  static quickSort(array) {
    if (!array || !array.length) {
      return array;
    }
    this.quick(array, 0, array.length - 1);
    return array;
  }

  /**
   * Recursive method to perform the quick sort
   * @method quick
   * @param {Array} array - input array
   * @param {Integer} left - left pointer
   * @param {Integer} right - right pointer
   * @return {Void}
   */
  static quick(array, left, right) {
    if (array.length > 1) {
      const index = this.partition(array, left, right);
      if (left < index - 1) {
        this.quick(array, left, index - 1);
      }
      if (index < right) {
        this.quick(array, index, right);
      }
    }
  }

  /**
   * get the index of the left pointer that will be used to create the sub-arrays
   * @method partition
   * @param {Array} array - input array
   * @param {Integer} left - left pointer
   * @param {Integer} right - right pointer
   * @return {Integer} pivot
   */
  static partition(array, left, right) {
    // get the pivot as the middle item of the array
    const pivot = array[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
      // move the left pointer until we find item is greater than the pivot
      while (array[i] < pivot) {
        i += 1;
      }

      // move the right pointer until we find item is smaller than the pivot
      while (array[j] > pivot) {
        j -= 1;
      }

      if (i <= j) {
        if (i !== j) {
          // if left pointer is smaller than the right pointer,
          // swap the items
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        i += 1;
        j -= 1;
      }
    }
    return i;
  }
}

module.exports = Sorting;
