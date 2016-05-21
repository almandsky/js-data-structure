var expect = require("chai").expect;
var AVLTree = require("../lib/AVLTree.js");

describe('AVLTree Test', function() {
    it('AVLTree output should match', function() {
        avlTree = new AVLTree();
        avlTree.insert(1);
        avlTree.insert(2);
        avlTree.insert(3);
        avlTree.insert(4);
        avlTree.insert(5);
        avlTree.insert(6);
        avlTree.insert(7);
        avlTree.insert(14);
        avlTree.insert(15);
        avlTree.insert(13);
        avlTree.insert(12);
        avlTree.insert(11);
        /*
        var output = {
            "key": 7,
            "left": {
                "key": 4,
                "left": {
                    "key": 2,
                    "left": {
                        "key": 1,
                        "left": null,
                        "right": null
                    },
                    "right": {
                        "key": 3,
                        "left": null,
                        "right": null
                    }
                },
                "right": {
                    "key": 6,
                    "left": {
                        "key": 5,
                        "left": null,
                        "right": null
                    },
                    "right": null
                }
            },
            "right": {
                "key": 14,
                "left": {
                    "key": 12,
                    "left": {
                        "key": 11,
                        "left": null,
                        "right": null
                    },
                    "right": {
                        "key": 13,
                        "left": null,
                        "right": null
                    }
                },
                "right": {
                    "key": 15,
                    "left": null,
                    "right": null
                }
            }
        };
        */
        var root = avlTree.getRoot();
        expect(root.key).to.equal(7);
        expect(root.left.key).to.equal(4);
        expect(root.left.left.key).to.equal(2);
        expect(root.left.right.key).to.equal(6);
        expect(root.left.right.left.key).to.equal(5);
        expect(root.left.left.left.key).to.equal(1);
        expect(root.left.left.right.key).to.equal(3);

        expect(root.right.key).to.equal(14);
        expect(root.right.left.key).to.equal(12);
        expect(root.right.left.left.key).to.equal(11);
        expect(root.right.left.right.key).to.equal(13);
        expect(root.right.right.key).to.equal(15);

    });
});