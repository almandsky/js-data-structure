module.exports = function usingAVLTree() {
    var AVLTree = require('../lib/AVLTree');
    var avlTree = new AVLTree();

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
    avlTree.insert(10);
    avlTree.insert(9);
    avlTree.insert(8);
    avlTree.insert(16);
    avlTree.insert(17);
    avlTree.insert(18);
    avlTree.insert(19);
    avlTree.insert(20);

    //RR rotation
    /*avlTree.insert(50);
    avlTree.insert(30);
    avlTree.insert(70);
    avlTree.insert(60);
    avlTree.insert(80);
    avlTree.insert(90);*/

    //LL rotation
    /*avlTree.insert(50);
    avlTree.insert(30);
    avlTree.insert(70);
    avlTree.insert(10);
    avlTree.insert(40);
    avlTree.insert(5);*/

    //LR rotation
    /*avlTree.insert(50);
    avlTree.insert(30);
    avlTree.insert(70);
    avlTree.insert(40);
    avlTree.insert(10);
    avlTree.insert(35);*/

    //RL rotation
    /*avlTree.insert(70);
    avlTree.insert(50);
    avlTree.insert(80);
    avlTree.insert(72);
    avlTree.insert(90);
    avlTree.insert(75);*/

    console.log('********* raw data structure ***********');
    console.log(avlTree.print());

    /*avlTree.remove(12);
    avlTree.remove(15);
    avlTree.remove(11);
    avlTree.remove(14);
    avlTree.remove(13);
    avlTree.remove(7);
    avlTree.remove(6);
    avlTree.remove(2);
    avlTree.remove(4);

    console.log(avlTree.getRoot());*/

}()