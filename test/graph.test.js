import Graph from '../lib-es6/graph';

const expect = require('chai').expect;

const graph = new Graph();

describe('Graph Test', () => {
  it('should initialize a Graph', () => {
    expect(graph.vertices[0]).to.equal('testing');
  });
});
