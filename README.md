# JavaScript Data Structure

[![Build Status](https://travis-ci.org/almandsky/js-data-structure.svg?branch=master)](https://travis-ci.org/almandsky/js-data-structure)
[![Codecov Coverage](https://img.shields.io/codecov/c/github/almandsky/js-data-structure.svg)](https://codecov.io/gh/almandsky/js-data-structure)
[![npm version](https://img.shields.io/npm/v/js-data-structure.svg)](https://www.npmjs.com/package/js-data-structure)
[![npm download](https://img.shields.io/npm/dt/js-data-structure.svg)](https://www.npmjs.com/package/js-data-structure)
[![MTI License](https://img.shields.io/npm/l/js-data-structure.svg)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)


Java Script Data Structure implemented in ES6.  It covers the implementation of the basic data structures, including graph, tree, queue, and some sorting and search algorithm for array.

The code here is rewriting from [Learning JavaScript Data Structures and Algorithms](https://github.com/loiane/javascript-datastructures-algorithms), and added the unit tests for each of the data structure.


## How to install and run the test

```bash
npm install;
npm test;
```

## Usage

```
// Using Graph
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

## License

MIT © [Sky Chen](https://www.skychen.com)
