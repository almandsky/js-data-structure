function squareRoots(l, k) {
    this.enqueue = function (pi){
        var added = false;
        for (var i=0; i<items.length; i++){
            if (pi.diff > items[i].diff){
                items.splice(i,0,pi);
                added = true;
                break;
            }
        }
        if (!added){
            items.push(pi);
        } 
    };
    this.dequeue = function () {
        return items.shift();
    };
    this.getSum = function(){
        var sum = 0;
        for (var i=0; i<items.length; i++){
            sum += items[i].value;
        }
        return sum;
    };
    var items = [];
    for (var i = 1; i <= l; i++){
        var item = {};
        item.value = i;
        var sqrt = Math.floor(Math.sqrt(i));
        item.sqrt = sqrt;
        item.diff = i - sqrt;
        item.index = i;
        this.enqueue(item);
    }
    var j = 0;
    var isAllOne = false;
    while (j < k && !isAllOne) {

        var processItem = this.dequeue();
        if (processItem.diff === 0){
            isAllOne = true;
        }
        var temp = processItem.sqrt;
        processItem.value = temp;
        processItem.sqrt = Math.floor(Math.sqrt(temp));
        processItem.diff = temp - processItem.sqrt;
        this.enqueue(processItem);
        j++;
    }
    return this.getSum();
}

var result = squareRoots(5,2);
console.log(result);
