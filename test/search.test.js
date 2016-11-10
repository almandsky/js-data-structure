import Search from '../src/lib-es6/search';

const expect = require('chai').expect;

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe('Search Test', () => {
  it('should sequentially search an iteam from array', () => {
    expect(Search.sequentialSearch(testArray, 3)).to.equal(2);
    expect(Search.sequentialSearch(undefined, 3)).to.equal(-1);
    expect(Search.sequentialSearch(testArray, 11)).to.equal(-1);
    expect(Search.sequentialSearch(testArray, 9)).to.equal(8);
    expect(Search.sequentialSearch(testArray, undefined)).to.equal(-1);
    expect(Search.sequentialSearch(testArray, {})).to.equal(-1);
  });

  it('should binary search an iteam from array', () => {
    expect(Search.binarySearch(testArray, 3)).to.equal(2);
    expect(Search.binarySearch(undefined, 3)).to.equal(-1);
    expect(Search.binarySearch(testArray, 11)).to.equal(-1);
    expect(Search.binarySearch(testArray, 9)).to.equal(8);
    expect(Search.binarySearch(testArray, undefined)).to.equal(-1);
    expect(Search.binarySearch(testArray, {})).to.equal(-1);
  });
});
