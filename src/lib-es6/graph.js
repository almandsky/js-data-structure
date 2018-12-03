/* eslint no-param-reassign: ["error", { "props": false }] */

import Queue from './queue';

class Graph {
  constructor() {
    this.vertices = [];
    this.adjList = {};
  }

  addVertex(v) {
    // only create new vertice if it is not exists
    if (this.vertices.indexOf(v) < 0) {
      this.vertices.push(v);
      this.adjList[v] = [];
    }
  }

  addEdge(v, w) {
    this.adjList[v].push(w);
  }

  toString() {
    let s = '';
    for (let i = 0; i < this.vertices.length; i += 1) {
      s += this.vertices[i];
      s += ' -> ';
      const neighbors = this.adjList[this.vertices[i]];
      for (let j = 0; j < neighbors.length; j += 1) {
        s += neighbors[j];
        if (j !== neighbors.length - 1) {
          s += ' ';
        }
      }
      s += '\n';
    }
    return s;
  }

  /**
   * Breath-first search (BFS), first widely, then deeply.
   * start traversing the graph from the first specified vertex,
   * will visit all its neighbors first, then the next layer (neighbor's neighbor)
   * @method bfs
   * @param {Object} v - the first vertex to start the bfs
   * @param {Function} callback - callback function when visiting the vertex
   * @return {Object} there are 2 property in the return object:
   *    distances - degree of each vertex in the path
   *    predecessors - predecessor of the vertex
   */
  bfs(v, callback) {
    const visitingQueue = new Queue();
    const visited = {};
    const distances = {};
    const predecessors = {};

    if (this.vertices.indexOf(v) >= 0) {
      visitingQueue.enqueue(v);
      visited[v] = 'inprogress';
      predecessors[v] = null;
      distances[v] = 0;
      while (!visitingQueue.isEmpty()) {
        const u = visitingQueue.dequeue();
        const neighbors = this.adjList[u];
        for (let i = 0; i < neighbors.length; i += 1) {
          const w = neighbors[i];
          if (!visited[w]) {
            visitingQueue.enqueue(w);
            visited[w] = 'inprogress';
            distances[w] = distances[u] + 1;
            predecessors[w] = u;
          }
        }
        visited[u] = 'done';
        if (callback) {
          callback(u);
        }
      }
    }
    return {
      distances,
      predecessors
    };
  }

  /**
   * Breath-first search (BFS), first widely, then deeply.
   * start traversing the graph from the first specified vertex,
   * will visit all its neighbors first, then the next layer (neighbor's neighbor)
   * @method bfs
   * @param {Function} callback - callback function when visiting the vertex
   * @return {Array} shortest path in array format. Empty array means no shortest path
   */
  getShortestPath(sourceVertex, destVertex) {
    if (!{}.hasOwnProperty.call(this.adjList, sourceVertex)
      || !{}.hasOwnProperty.call(this.adjList, destVertex)) {
      // vertex not exist
      return [];
    }

    // use bfs to get the predecessors
    const path = [];

    const { predecessors } = this.bfs(sourceVertex, (vertex) => {
      path.push(vertex);
    });

    // check if there is path to the destVertex
    if (path.indexOf(destVertex) === -1) {
      return [];
    }

    // generate the shortest path
    const shortestPath = [];

    let v = destVertex;
    while (v !== sourceVertex) {
      shortestPath.push(v);
      v = predecessors[v];
    }
    shortestPath.push(sourceVertex);
    return shortestPath.reverse();
  }

  /**
   * Depth-first search (DFS), first deeply, then widely.
   * start traversing the graph from the first specified vertex,
   * will follow the path until last vertex of the path is visited,
   * then will backtrack the next path
   * @method dfs
   * @param {Object} v - the first vertex to start the dfs
   * @param {Function} callback - callback function when visiting the vertex
   * @return {Object} there are 3 property in the return object:
   *    discovery - the discovery time
   *    finished - the time marked as finish
   *    predecessors - predecessor of the vertex
   */
  dfs(vertex, callback) {
    const visited = {};
    const discovery = {};
    const finished = {};
    const predecessors = {};
    const counter = 0;

    if (this.vertices.indexOf(vertex) >= 0) {
      predecessors[vertex] = null;
      this.dfsVisit(vertex, visited, discovery, finished, predecessors, counter, callback);
    }

    return {
      discovery,
      finished,
      predecessors
    };
  }

  /**
   * The recursive function to DFS traverse the vertices
   * @method dfsVisit
   * @param {Object} v - the current visiting vertex
   * @param {Object} visited - dictionary for marking the node visited or not
   * @param {Object} discovery - dictionary for vertex discovery time
   * @param {Object} finished - dictionary for vertex finish visit time
   * @param {Integer} counter - the current step
   * @param {Function} callback - callback function when visiting the vertex
   * @return {Integer} The total step of the node visit or finish
   */
  dfsVisit(v, visited, discovery, finished, predecessors, counter, callback) {
    visited[v] = true;
    let time = counter + 1;
    discovery[v] = time;
    // console.log(`discovered ${v}`);
    if (callback) {
      callback(v);
    }
    const neighbors = this.adjList[v];
    for (let i = 0; i < neighbors.length; i += 1) {
      const u = neighbors[i];
      if (!visited[u]) {
        predecessors[u] = v;
        time = this.dfsVisit(u, visited, discovery, finished, predecessors, time, callback);
      }
    }
    time += 1;
    finished[v] = time;
    // console.log(`explored ${v}`);
    return time;
  }
}

export default Graph;
