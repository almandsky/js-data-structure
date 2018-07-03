/*
1. Given a binary tree, get the minimum depth that the node has no child.
          1
        /  \
       2    3
      /
    4
    
Answer is: 2, because 3 does not have any child.

          1
        / 
       2   
      /
    4
    
Answer is: 3, because 4 does not have any child.

          1
           \
            2
             \
              3
    
Answer is: 3, because 3 does not have any child.

*/

var Node = function(key){
    this.value = key;
    this.left = null;
    this.right = null;
};

function minDepth(node, depth) {
    if (typeof depth === 'undefined') {
        depth = 0;
    }

    if (typeof node === 'undefined' || node === null) {
        return depth === 0 ? 0 : Infinity;
    }

    var newdepth = depth + 1;
    // check if there is any chiren
    if (!node.left && !node.right) {
        return newdepth;
    } else {
        leftDepth = minDepth(node.left, newdepth);
        rightDepth = minDepth(node.right, newdepth);
        return leftDepth < rightDepth ? leftDepth : rightDepth;
    }
}

tree = new Node(1);
tree2 = new Node(2);
tree3 = new Node(3);
tree4 = new Node(4);

/*
          1
        /  \
       2    3
      /
    4
*/

tree.left = tree2
tree.right = tree3
tree2.left = tree4

var result = minDepth(tree);
console.assert(result === 2, 'result is ' + result);


/*
          1
        /
       2 
      /
    4
*/

tree.right = null;

result = minDepth(tree);
console.assert(result === 3, 'result is ' + result);


/*
          1
           \
            2
             \
              3
*/

tree.left = null;
tree.right = tree2;
tree2.left = null;
tree2.right = tree3;

result = minDepth(tree);
console.assert(result === 3, 'result is ' + result);