/*


Given an undirected graph and some vertex index, find the size of the connected component of that vertex.

Example

For

matrix = [[false, true, false],
          [true, false, false],
          [false, false, false]]

and vertex = 0, the output should be
dfsComponentSize(matrix, vertex) = 2.

Input/Output

    [time limit] 4000ms (js)

    [input] array.array.boolean matrix

    The adjacency matrix of the undirected graph with no loops or multiple edges.

    Constraints:
    3 ≤ matrix.length ≤ 10,
    matrix[i].length = matrix.length.

    [input] integer vertex

    0-based index of some vertex of the given graph.

    Constraints:
    0 ≤ vertex < matrix.length.

    [output] integer


*/

function dfsComponentSize(matrix, vertex) {

  var dfs = function(currentVertex, visited) {
    visited[currentVertex] = true;
    componentSize += 1;
    for (var nextVertex = 0; nextVertex < matrix.length; nextVertex++) {
        var adj = matrix[currentVertex];
      if ( adj[nextVertex] && !visited[nextVertex]) {
        dfs(nextVertex, visited);
      }
    }
  }

  var visited = [],
      componentSize = 0;

  for (var i = 0; i < matrix.length; i++) {
    visited.push(false);
  }

  dfs(vertex, visited);

  return componentSize;
}
