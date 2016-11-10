/* eslint no-param-reassign: ["error", { "props": false }] */

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(key) {
    const node = new Node(key);
    if (!this.root) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else if (!node.right) {
      node.right = newNode;
    } else {
      this.insertNode(node.right, newNode);
    }
  }

  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback);
  }

  inOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node);
      this.inOrderTraverseNode(node.right, callback);
    }
  }

  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback);
  }

  preOrderTraverseNode(node, callback) {
    if (node !== null) {
      callback(node);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }

  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback);
  }

  postOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node);
    }
  }

  static minNode(node) {
    let pointer = node;
    if (pointer) {
      while (pointer && pointer.left !== null) {
        pointer = pointer.left;
      }
      return pointer;
    }
    return null;
  }

  min() {
    const minimumNode = BinarySearchTree.minNode(this.root);
    if (minimumNode !== null) {
      return minimumNode.key;
    }
    return null;
  }


  max() {
    const maximumNode = BinarySearchTree.maxNode(this.root);
    if (maximumNode !== null) {
      return maximumNode.key;
    }
    return null;
  }

  static maxNode(node) {
    let pointer = node;
    if (pointer) {
      while (pointer && pointer.right !== null) {
        pointer = pointer.right;
      }
      return pointer;
    }
    return null;
  }

  search(key) {
    return this.searchNode(this.root, key);
  }

  searchNode(node, key) {
    if (node === null) {
      return false;
    }

    if (key < node.key) {
      return this.searchNode(node.left, key);
    } else if (key > node.key) {
      return this.searchNode(node.right, key);
    }

    return key === node.key;
  }

  remove(key) {
    this.root = this.removeNode(this.root, key);
  }

  removeNode(node, key) {
    let pointer = node;
    if (pointer === null) {
      return null;
    }

    if (key < pointer.key) {
      pointer.left = this.removeNode(pointer.left, key);
      return pointer;
    } else if (key > pointer.key) {
      pointer.right = this.removeNode(pointer.right, key);
      return pointer;
    } else if (key !== pointer.key) {
      // key value not exist in the tree
      return pointer;
    }

    if (pointer.left === null && pointer.right === null) {
      pointer = null;
      return pointer;
    }

    if (pointer.left === null) {
      pointer = pointer.right;
      return pointer;
    } else if (pointer.right === null) {
      pointer = pointer.left;
      return pointer;
    }

    const aux = BinarySearchTree.minNode(pointer.right);
    pointer.key = aux.key;
    pointer.right = this.removeNode(pointer.right, aux.key);
    return pointer;
  }
}

module.exports = {
  BinarySearchTree
};
