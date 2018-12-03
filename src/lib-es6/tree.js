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

  /**
   * Add an object to the tree
   * @method insert
   * @param {Object} key - the new object to be inserted to the tree
   * @return {Void}
   */
  insert(key) {
    const node = new Node(key);
    if (!this.root) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  /**
   * Add a new node to the specific node
   * @method insertNode
   * @param {Node} node - parent node to be insert into
   * @param {Node} newNode - new node to be inserted
   * @return {Void}
   */
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

  /**
   * in-order traverse a tree, visit the node in ascending order.
   * @method inOrderTraverse
   * @param {Function} callback - the callback function to be executed
   * @return {Void}
   */
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback);
  }

  /**
   * Recersive function to in-order traverse a tree for specific node
   * @method inOrderTraverseNode
   * @param {Node} node - target node to be traversed
   * @param {Function} callback - the callback function to be executed
   * @return {Void}
   */
  inOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node);
      this.inOrderTraverseNode(node.right, callback);
    }
  }

  /**
   * pre-order traverse a tree, the root is the first node visited.
   * @method preOrderTraverse
   * @param {Function} callback - the callback function to be executed
   * @return {Void}
   */
  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback);
  }

  /**
   * Recersive function to pre-order traverse a tree for specific node
   * @method preOrderTraverseNode
   * @param {Node} node - target node to be traversed
   * @param {Function} callback - the callback function to be executed
   * @return {Void}
   */
  preOrderTraverseNode(node, callback) {
    if (node !== null) {
      callback(node);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }

  /**
   * post-order traverse a tree, the root is the last node visited.
   * @method postOrderTraverse
   * @param {Function} callback - the callback function to be executed
   * @return {Void}
   */
  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback);
  }

  /**
   * Recersive function to post-order traverse a tree for specific node
   * @method postOrderTraverseNode
   * @param {Node} node - target node to be traversed
   * @param {Function} callback - the callback function to be executed
   * @return {Void}
   */
  postOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node);
    }
  }

  /**
   * Get the min node of the tree
   * @method min
   * @return {Object} The min value (object) of the tree
   */
  min() {
    const minimumNode = BinarySearchTree.minNode(this.root);
    if (minimumNode !== null) {
      return minimumNode.key;
    }
    return null;
  }

  /**
   * Get the min node of specific node (sub-tree)
   * @method minNode
   * @param {Node} node
   * @return {Node} the smallest node
   */
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

  /**
   * Get the max node of the tree
   * @method max
   * @return {Object} The max value (object) of the tree
   */
  max() {
    const maximumNode = BinarySearchTree.maxNode(this.root);
    if (maximumNode !== null) {
      return maximumNode.key;
    }
    return null;
  }

  /**
   * Get the max node of specific node (sub-tree)
   * @method maxNode
   * @param {Node} node
   * @return {Node} the largest node
   */
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

  /**
   * Search a object or value in the tree
   * @method search
   * @param {Object} key - The object or value to search for
   * @return {Boolean} if the key is found
   */
  search(key) {
    return this.searchNode(this.root, key);
  }

  /**
   * Recursive search function to find a object or value in the node
   * @method searchNode
   * @param {Node} node - node to be searched for the key
   * @param {Object} key - The object or value to search for
   * @return {Boolean} if the key is found
   */
  searchNode(node, key) {
    if (node === null) {
      return false;
    }

    if (key < node.key) {
      return this.searchNode(node.left, key);
    }

    if (key > node.key) {
      return this.searchNode(node.right, key);
    }

    return key === node.key;
  }

  /**
   * Remove a object or value in the tree
   * @method remove
   * @param {Object} key - The object or value to be removed
   * @return {Void}
   */
  remove(key) {
    this.root = this.removeNode(this.root, key);
  }

  /**
   * Remove a object or value in the sub-tree
   * @method removeNode
   * @param {Node} node - the root of the sub tree
   * @param {Object} key - The object or value to be removed
   * @return {Node} the new tree after removing the key
   */
  removeNode(node, key) {
    let pointer = node;
    if (pointer === null) {
      return null;
    }

    if (key < pointer.key) {
      pointer.left = this.removeNode(pointer.left, key);
      return pointer;
    }
    if (key > pointer.key) {
      pointer.right = this.removeNode(pointer.right, key);
      return pointer;
    }
    if (key !== pointer.key) {
      // key value not exist in the tree
      return pointer;
    }

    if (pointer.left === null && pointer.right === null) {
      // the target node is a leaf
      pointer = null;
      return pointer;
    }

    // the target node has one child
    if (pointer.left === null) {
      pointer = pointer.right;
      return pointer;
    }
    if (pointer.right === null) {
      pointer = pointer.left;
      return pointer;
    }

    // the target node has 2 children
    // get the smallest node from the right sub-tree
    const temp = BinarySearchTree.minNode(pointer.right);
    pointer.key = temp.key;
    // recursively update the right child,
    // it will be the new tree with the smallest item removed.
    pointer.right = this.removeNode(pointer.right, temp.key);
    return pointer;
  }

  /**
   * Get height of the provided tree node
   * @method nodeHeight
   * @param {Node} node
   * @return {Number} the height of the node
   */
  static nodeHeight(node) {
    if (!node) {
      return -1;
    }
    return Math.max(this.nodeHeight(node.left), this.nodeHeight(node.right)) + 1;
  }

  /**
   * Get height of the tree
   * @method nodeHeight
   * @return {Number} the height of the tree
   */
  getHeight() {
    if (this.root === null) {
      return -1;
    }
    return BinarySearchTree.nodeHeight(this.root);
  }

  /**
   * Check if the Binary Search Tree is balance or not
   * @method isBalance
   * @return {Boolean} the new tree after removing the key
   */
  isBalance() {
    if (this.root === null) {
      return true;
    }
    return BinarySearchTree.checkBalance(this.root);
  }

  /**
   * Check if the provided node is balance or not
   * @method checkBalance
   * @param {Node} node
   * @return {Boolean} the new tree after removing the key
   */

  static checkBalance(node) {
    if (!node) {
      return true;
    }

    const leftHeight = BinarySearchTree.nodeHeight(node.left);
    const rightHeight = BinarySearchTree.nodeHeight(node.right);
    const heightDiff = leftHeight - rightHeight;

    if (Math.abs(heightDiff) > 1) {
      return false;
    }
    return BinarySearchTree.checkBalance(node.left) && BinarySearchTree.checkBalance(node.right);
  }

  // TODO: print the tree
}

export default BinarySearchTree;
