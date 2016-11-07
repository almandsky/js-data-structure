/*
1. Given a binary tree, where each node is labeled with an integer return the path from root to leaf that forms the maximum sum.  Complexity.                  
          4
        /  \
       5    8
      / \    \
    333  0    10
             /   
            11
              \  
              12

Answer is: 4, 5, 333.

*/

var Node = function(key){
    this.value = key;
    this.left = null;
    this.right = null;
    this.parent = null;
};

function generateRoute(node) {
    var route = [];
    route.push(node.value);
    var parentNode = node.parent;
    while (parentNode) {
        route.push(parentNode.value);
        parentNode = parentNode.parent;
    }
    return route.reverse();
}

function getMaxRoute(node, total) {
    if (!node) {
        return;
    }
    // store all the routes
    var new_total = total + node.value;

    if (node.left) {
        node.left.parent = node;
        getMaxRoute(node.left, new_total);
    }

    if (node.right) {
        node.right.parent = node;
        getMaxRoute(node.right, new_total);
    }

    if (!node.left && !node.right) {
        if (new_total > maxSum) {
            maxSum = new_total;
            routes = generateRoute(node);
        } 
    }
}



var maxSum = 0;
var routes = [];

var rootNode = new Node(4);
rootNode.left = new Node(5);
rootNode.left.left = new Node(333);
rootNode.left.right = new Node(0);
rootNode.right = new Node(8)
rootNode.right.right = new Node(10);
rootNode.right.right.left = new Node(11);
rootNode.right.right.left.right = new Node(12);


getMaxRoute(rootNode, 0);
console.log('result is ' + routes);

