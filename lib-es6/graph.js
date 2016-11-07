class Graph {
  constructor() {
    this.vertices = ['testing'];
    this.adjList = new Map();
  }

  print() {
    console.log(this.vertices);
  }
}

module.exports = Graph;
