import Sorting from '../lib-es6/sorting';

const expect = require('chai').expect;

const testArray1 = [5, 6, 4, 7, 9, 3, 8, 1, 2];
const testArray2 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

describe('Sorting Test', () => {
  it('should bubble sort an array', () => {
    expect(Sorting.bubbleSort(testArray1)).to.deep.equal(sortedArray);
    expect(Sorting.bubbleSort(testArray2)).to.deep.equal(sortedArray);
  });

  it('should selection sort an array', () => {
    expect(Sorting.selectionSort(testArray1)).to.deep.equal(sortedArray);
    expect(Sorting.selectionSort(testArray2)).to.deep.equal(sortedArray);
  });

  it('should instertion sort an array', () => {
    expect(Sorting.insertionSort(testArray1)).to.deep.equal(sortedArray);
    expect(Sorting.insertionSort(testArray2)).to.deep.equal(sortedArray);
  });
});
