import Sorting from '../lib-es6/sorting';

import { testArray1, testArray2, sortedArray } from './sorting.mock';

const expect = require('chai').expect;
/*
const testArray1 = [5, 4, 3, 2, 1];
const testArray2 = [1, 2, 3, 5, 4];

const sortedArray = [1, 2, 3, 4, 5];

console.log(testArray1);
console.log(testArray2);
console.log(sortedArray);
*/
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
});
