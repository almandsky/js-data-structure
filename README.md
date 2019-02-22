# JavaScript Data Structure

[![Build Status](https://travis-ci.org/almandsky/js-data-structure.svg?branch=master)](https://travis-ci.org/almandsky/js-data-structure)
[![Codecov Coverage](https://img.shields.io/codecov/c/github/almandsky/js-data-structure.svg)](https://codecov.io/gh/almandsky/js-data-structure)
[![npm version](https://img.shields.io/npm/v/js-data-structure.svg)](https://www.npmjs.com/package/js-data-structure)
[![npm download](https://img.shields.io/npm/dt/js-data-structure.svg)](https://www.npmjs.com/package/js-data-structure)
[![MTI License](https://img.shields.io/npm/l/js-data-structure.svg)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)


JavaScript data structure implemented in ES6.  This library covers the implementation of the basic data structures, including [graph](https://en.wikipedia.org/wiki/Graph_%28abstract_data_type%29)([Breath-first Search](https://en.wikipedia.org/wiki/Breadth-first_search), [Depth-first search](https://en.wikipedia.org/wiki/Depth-first_search)), [binary search tree](https://en.wikipedia.org/wiki/Binary_search_tree), [queue](https://en.wikipedia.org/wiki/Queue_%28abstract_data_type%29), and some sorting ([Quick Sort](http://en.wikipedia.org/wiki/Quicksort), [Merge Sort](http://en.wikipedia.org/wiki/Merge_sort)) and search algorithm for array.

The code here is rewriting from [Learning JavaScript Data Structures and Algorithms](https://github.com/loiane/javascript-datastructures-algorithms) to es6 with some enhancements on performance, and added the unit tests for each of the data structure.


## How to install and run the test

```bash
npm install;
npm test;
```

## How to commit the code to release a new version via semantically-released

```bash
npm run commit;

```

## Usage

```
// Graph
import { Graph } from 'js-data-structure';
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addVertex('G');
graph.addVertex('H');
graph.addVertex('I');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'F');
graph.addEdge('D', 'E');
graph.addEdge('E', 'G');
graph.addEdge('E', 'I');
graph.addEdge('F', 'E');
graph.addEdge('G', 'H');
graph.addEdge('H', 'I');

/*
************************
Graph generated
************************
 A -> B
 |    |
 \/   \/
 C    D
 |    |
 \/   \/
 F -> E  -> G
      |     |
      \/    \/
      I  <- H
************************
*/

// get the shortest path
const shortestPath = graph.getShortestPath('A', 'I');
console.log(shortestPath) // ['A', 'B', 'D', 'E', 'I']


```

## include in the browser

```javascript
import { Sorting } from 'js-data-structure';
console.log(Sorting.bubbleSort([5, 4, 3, 2, 1]));

```

## Contact us

Please chat with us via https://gitter.im/almandsky-js-data-structure/community

## License

MIT © [Sky Chen](https://www.skychen.com)
