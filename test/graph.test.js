import Graph from '../src/lib-es6/graph';

const { expect } = require('chai');

function generateTestGraph() {
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
  return graph;
}

describe('Graph Test', () => {
  it('should add vertices to a Graph', () => {
    const graph = new Graph();
    graph.addVertex('A');
    expect(graph.vertices[0]).to.equal('A');
    expect(graph.adjList).to.deep.equal({ A: [] });
  });

  it('should add edge to a Graph', () => {
    const graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'C');
    const str = 'A -> B C\nB -> C\nC -> \n';
    expect(graph.toString()).to.equal(str);
  });

  it('should breath-first search a Graph', () => {
    const graph = generateTestGraph();

    let result = [];
    function visitNode(value) {
      result.push(value);
    }
    let resultObj = graph.bfs('A', visitNode);
    expect(result).to.deep.equal(['A', 'B', 'C', 'D', 'F', 'E', 'G', 'I', 'H']);
    expect(resultObj.distances).to.deep.equal({
      A: 0,
      B: 1,
      C: 1,
      D: 2,
      F: 2,
      E: 3,
      G: 4,
      I: 4,
      H: 5
    });
    expect(resultObj.predecessors).to.deep.equal({
      A: null,
      B: 'A',
      C: 'A',
      D: 'B',
      F: 'C',
      E: 'D',
      G: 'E',
      I: 'E',
      H: 'G'
    });

    result = [];
    resultObj = graph.bfs('B', visitNode);
    expect(result).to.deep.equal(['B', 'D', 'E', 'G', 'I', 'H']);
    expect(resultObj.distances).to.deep.equal({
      B: 0, D: 1, E: 2, G: 3, I: 3, H: 4
    });
    expect(resultObj.predecessors).to.deep.equal({
      B: null,
      D: 'B',
      E: 'D',
      G: 'E',
      I: 'E',
      H: 'G'
    });
    // test empty callback
    result = [];
    resultObj = graph.bfs('C', undefined);
    expect(result).to.deep.equal([]);
    expect(resultObj.distances).to.deep.equal({
      C: 0, F: 1, E: 2, G: 3, I: 3, H: 4
    });
    expect(resultObj.predecessors).to.deep.equal({
      C: null,
      F: 'C',
      E: 'F',
      G: 'E',
      I: 'E',
      H: 'G'
    });

    // test the empty graph
    result = [];
    const graph2 = new Graph();
    resultObj = graph2.bfs(undefined, undefined);
    expect(result).to.deep.equal([]);
    expect(resultObj.distances).to.deep.equal({});
    expect(resultObj.predecessors).to.deep.equal({});
  });

  it('should get shortest path between two vertices', () => {
    const graph = generateTestGraph();

    const shortestPath = graph.getShortestPath('A', 'I');
    expect(shortestPath).to.deep.equal(['A', 'B', 'D', 'E', 'I']);

    // source and dest vertices not exists
    const graph2 = new Graph();
    let invalidShortestPath = graph2.getShortestPath('X', 'Z');
    expect(invalidShortestPath).to.deep.equal([]);

    // dest vertex not exists
    graph2.addVertex('X');
    invalidShortestPath = graph2.getShortestPath('X', 'Z');
    expect(invalidShortestPath).to.deep.equal([]);

    // path not exist
    graph2.addVertex('Y');
    graph2.addVertex('Z');
    graph2.addEdge('X', 'Y');
    invalidShortestPath = graph2.getShortestPath('X', 'Z');
    expect(invalidShortestPath).to.deep.equal([]);
  });

  it('should deep-first search a Graph', () => {
    const graph = generateTestGraph();

    let result = [];
    function visitNode(value) {
      result.push(value);
    }
    let resultObj = graph.dfs('A', visitNode);

    expect(result).to.deep.equal(['A', 'B', 'D', 'E', 'G', 'H', 'I', 'C', 'F']);
    expect(resultObj.predecessors).to.deep.equal({
      A: null,
      B: 'A',
      D: 'B',
      E: 'D',
      G: 'E',
      H: 'G',
      I: 'H',
      C: 'A',
      F: 'C'
    });
    expect(resultObj.discovery).to.deep.equal({
      A: 1,
      B: 2,
      D: 3,
      E: 4,
      G: 5,
      H: 6,
      I: 7,
      C: 14,
      F: 15
    });

    expect(resultObj.finished).to.deep.equal({
      I: 8,
      H: 9,
      G: 10,
      E: 11,
      D: 12,
      B: 13,
      F: 16,
      C: 17,
      A: 18
    });

    result = [];
    resultObj = graph.dfs('E', visitNode);
    expect(resultObj.predecessors).to.deep.equal({
      E: null,
      G: 'E',
      H: 'G',
      I: 'H'
    });
    expect(resultObj.discovery).to.deep.equal({
      E: 1,
      G: 2,
      H: 3,
      I: 4
    });
    expect(resultObj.finished).to.deep.equal({
      E: 8,
      G: 7,
      H: 6,
      I: 5
    });

    // test empty callback
    result = [];
    resultObj = graph.dfs('C', undefined);
    expect(result).to.deep.equal([]);

    // test the empty graph
    result = [];
    const graph2 = new Graph();
    resultObj = graph2.dfs(undefined, undefined);
    expect(result).to.deep.equal([]);
    expect(resultObj.discovery).to.deep.equal({});
    expect(resultObj.finished).to.deep.equal({});
    expect(resultObj.predecessors).to.deep.equal({});
  });
});
