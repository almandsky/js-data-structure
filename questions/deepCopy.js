
/*
Deep copy the linked list

head -> nodeA.next -> nodeB -> nodeD -> nodeE -> nodeC
        nodeA.random -> nodeE  nodeD.random -> nodeC
        
        
head2 -> nodeA'.next -> nodeB' -> nodeD' -> nodeE' -> nodeC'
         nodeA'.random -> nodeE'  nodeD'.random -> nodeC'
*/
function deepCopy (headNode) {

    var newHeadNode = new nodeElement(headNode.element); 

    var nextNode = headNode.next;
    var newNextNode  = newHeadNode;
    
    while(nextNode) {
        // copy the next node

        newTempNextNode = new nodeElement(nextNode.element);

        newNextNode.next = newTempNextNode;
        newNextNode = newNextNode.next;
        nextNode = nextNode.next;
        
    }
    // remember the random relationship, and not doing a deep copy.
    
    nextNode = headNode.next;
    newNextNode = newHeadNode.next;
    while(nextNode) {
        if (nextNode.random) {
            var randomIndex = findRandom(headNode, nextNode.random);
            var newRandomNode = getRandomNode(newHeadNode, randomIndex);
            newNextNode.random = newRandomNode;
        }
        nextNode = nextNode.next;
        newNextNode = newNextNode.next;
    }
    
    
    return newHeadNode;
    
}

function findRandom(node, targetNode) {
    if (!targetNode) {
        return -1;
    }
    if (node === targetNode) {
        return 0;
    }
    var i = 1;
    var nextNode = node.next;
    while (nextNode) {
        if (nextNode === targetNode) {
            return i;
        }
        i++;
        nextNode = nextNode.next;
    }
    return i;
}

function getRandomNode(node, index) {
    if (index === 0) {
        return node;
    }
    var i = 1;

    var nextNode = node.next;
    while (i < index) {
        nextNode = nextNode.next;
        i++;
    }
    return nextNode;
}


var nodeElement = function (element){
    this.element = element;
    this.random = null;
    this.next = null;
    
}

var nodeA = new nodeElement('A');
var nodeB = new nodeElement('B');
var nodeC = new nodeElement('C');
var nodeD = new nodeElement('D');
var nodeE = new nodeElement('E');
nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;
nodeD.next = nodeE;
nodeB.random = nodeD;

console.log('========== original linked list ==============');
console.log(JSON.stringify(nodeA));
var result = deepCopy (nodeA);

console.log('========== deep copied linked list ==============');
console.log(JSON.stringify(result));

console.log('========== compare ==============');
console.log('The stringify is the same? ' + (JSON.stringify(nodeA) === JSON.stringify(result)));


//test to change the value and see if the new linked list got affected.
nodeA.element = 'AA';
nodeD.element = 'DD';

console.log('========== Updated original linked list ==============');
console.log(JSON.stringify(nodeA));

console.log('========== deep copied linked list ==============');
console.log(JSON.stringify(result));

console.log('========== compare ==============');
console.log('The stringify is the same? ' + (JSON.stringify(nodeA) === JSON.stringify(result)));

