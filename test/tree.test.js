import { BinarySearchTree } from '../src/lib-es6/tree';

const expect = require('chai').expect;

const binarySearchTree = new BinarySearchTree();

describe('Tree Test', () => {
  it('should insert a node to a tree', () => {
    binarySearchTree.insert(5);
    binarySearchTree.insert(3);
    binarySearchTree.insert(8);
    binarySearchTree.insert(7);
    binarySearchTree.insert(2);
    binarySearchTree.insert(4);
    binarySearchTree.insert(9);
    /*
    ***************************
                 5
               /   \
              3     8
             / \   / \
            2   4 7   9
    ***************************
    */
    expect(binarySearchTree.root.key).to.equal(5);
    expect(binarySearchTree.root.left.key).to.equal(3);
    expect(binarySearchTree.root.right.key).to.equal(8);
    expect(binarySearchTree.root.right.left.key).to.equal(7);
    expect(binarySearchTree.root.left.left.key).to.equal(2);
    expect(binarySearchTree.root.left.right.key).to.equal(4);
    expect(binarySearchTree.root.right.right.key).to.equal(9);
  });

  it('should in-order traverse a tree', () => {
    const result = [];
    binarySearchTree.inOrderTraverse((node) => { result.push(node.key); });
    expect(result).to.deep.equal([2, 3, 4, 5, 7, 8, 9]);
  });

  it('should pre-order traverse a tree', () => {
    const result = [];
    binarySearchTree.preOrderTraverse((node) => { result.push(node.key); });
    expect(result).to.deep.equal([5, 3, 2, 4, 8, 7, 9]);
  });

  it('should post-order traverse a tree', () => {
    const result = [];
    binarySearchTree.postOrderTraverse((node) => { result.push(node.key); });
    expect(result).to.deep.equal([2, 4, 3, 7, 9, 8, 5]);
  });

  it('should return the min value a tree', () => {
    expect(binarySearchTree.min()).to.equal(2);

    const binarySearchTree2 = new BinarySearchTree()

    expect(binarySearchTree2.min()).to.equal(null);

    binarySearchTree2.insert(1);
    expect(binarySearchTree2.min()).to.equal(1);
  });

  it('should return the max value a tree', () => {
    expect(binarySearchTree.max()).to.equal(9);

    const binarySearchTree2 = new BinarySearchTree()

    expect(binarySearchTree2.max()).to.equal(null);
    
    binarySearchTree2.insert(1);
    expect(binarySearchTree2.max()).to.equal(1);
  });

  it('should search a value in a tree', () => {
    expect(binarySearchTree.search(8)).to.equal(true);
    expect(binarySearchTree.search(10)).to.equal(false);
    expect(binarySearchTree.search(0)).to.equal(false);
    expect(binarySearchTree.search(1)).to.equal(false);
    expect(binarySearchTree.search(undefined)).to.equal(false);
    expect(binarySearchTree.search(null)).to.equal(false);
    expect(binarySearchTree.search({})).to.equal(false);
  });

  it('should remove a value in a tree', () => {
    binarySearchTree.insert(1);
    binarySearchTree.insert(15);
    binarySearchTree.insert(13);
    binarySearchTree.insert(19);
    /*
    ***************************
                 5
               /   \
              3     8
             / \   / \
            2   4 7   9
           /           \
          1             15
                       /  \
                      13  19
    ***************************
    */
    binarySearchTree.remove(9);
    binarySearchTree.remove(8);
    binarySearchTree.remove(2);
    binarySearchTree.remove(4);
    binarySearchTree.remove(15);
    binarySearchTree.remove(undefined);
    /*
    ***************************
                 5
               /   \
              3     9
               \   / 
                4 7  
    ***************************
    */
    expect(binarySearchTree.root.key).to.equal(5);
    expect(binarySearchTree.root.left.key).to.equal(3);
    expect(binarySearchTree.root.right.key).to.equal(13); // 8 and 9 were removed
    expect(binarySearchTree.root.right.left.key).to.equal(7);
    expect(binarySearchTree.root.left.left.key).to.equal(1); // 2 was removed.
    expect(binarySearchTree.root.left.right).to.equal(null); // 4 was removed

    const binarySearchTree2 = new BinarySearchTree();
    binarySearchTree2.remove(100);
    expect(binarySearchTree2.root).to.equal(null);
  });
});
