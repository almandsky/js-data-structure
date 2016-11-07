/* eslint no-param-reassign: ["error", { "props": false }] */

class Sorting {

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

  static selectionSort(array) {
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

  static insertionSort(array) {
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

  static mergeSort(array) {
    return array;
  }

}

module.exports = Sorting;
