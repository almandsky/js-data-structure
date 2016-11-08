import Sorting from '../src/lib-es6/sorting';

import { testArray1, testArray2, sortedArray } from './sorting.mock';

const expect = require('chai').expect;

describe('Sorting Test', () => {
  it('should bubble sort an array', () => {
    expect(Sorting.bubbleSort(undefined)).to.deep.equal(undefined);
    expect(Sorting.bubbleSort(testArray1.concat())).to.deep.equal(sortedArray);
    expect(Sorting.bubbleSort(testArray2.concat())).to.deep.equal(sortedArray);
  });

  it('should selection sort an array', () => {
    expect(Sorting.selectionSort(undefined)).to.deep.equal(undefined);
    expect(Sorting.selectionSort(testArray1.concat())).to.deep.equal(sortedArray);
    expect(Sorting.selectionSort(testArray2.concat())).to.deep.equal(sortedArray);
  });

  it('should instertion sort an array', () => {
    expect(Sorting.insertionSort(undefined)).to.deep.equal(undefined);
    expect(Sorting.insertionSort(testArray1.concat())).to.deep.equal(sortedArray);
    expect(Sorting.insertionSort(testArray2.concat())).to.deep.equal(sortedArray);
  });

  it('should merge sort an array', () => {
    expect(Sorting.mergeSort(undefined)).to.deep.equal(undefined);
    expect(Sorting.mergeSort(testArray1.concat())).to.deep.equal(sortedArray);
    expect(Sorting.mergeSort(testArray2.concat())).to.deep.equal(sortedArray);
  });
});
