module.exports = function Set() {

    var items = {};

    this.add = function(value){
        if (!this.has(value)){
            items[value] = value;
            return true;
        }
        return false;
    };

    this.delete = function(value){
        if (this.has(value)){
            delete items[value];
            return true;
        }
        return false;
    };

    this.has = function(value){
        return items.hasOwnProperty(value);
        //return value in items;
    };

    this.clear = function(){
        items = {};
    };

    /**
     * Modern browsers function
     * IE9+, FF4+, Chrome5+, Opera12+, Safari5+
     * @returns {Number}
     */
    this.size = function(){
        return Object.keys(items).length;
    };

    /**
     * cross browser compatibility - legacy browsers
     * for modern browsers use size function
     * @returns {number}
     */
    this.sizeLegacy = function(){
        var count = 0;
        for(var key in items) {
            if(items.hasOwnProperty(key))
                ++count;
        }
        return count;
    };

    /**
     * Modern browsers function
     * IE9+, FF4+, Chrome5+, Opera12+, Safari5+
     * @returns {Array}
     */
    this.values = function(){
        var values = [];
        for (var i=0, keys=Object.keys(items); i<keys.length; i++) {
            values.push(items[keys[i]]);
        }
        return values;
    };

    this.valuesLegacy = function(){
        var values = [];
        for(var key in items) {
            if(items.hasOwnProperty(key)) {
                values.push(items[key]);
            }
        }
        return values;
    };

    this.getItems = function(){
      return items;
    };

    this.union = function(otherSet){
        var unionSet = new Set();

        var values = this.values();
        for (var i=0; i<values.length; i++){
            unionSet.add(values[i]);
        }

        values = otherSet.values();
        for (var i=0; i<values.length; i++){
            unionSet.add(values[i]);
        }

        return unionSet;
    };

    this.intersection = function(otherSet){
        var intersectionSet = new Set();

        var values = this.values();
        for (var i=0; i<values.length; i++){
            if (otherSet.has(values[i])){
                intersectionSet.add(values[i]);
            }
        }

        return intersectionSet;
    };

    this.difference = function(otherSet){
        var differenceSet = new Set();

        var values = this.values();
        for (var i=0; i<values.length; i++){
            if (!otherSet.has(values[i])){
                differenceSet.add(values[i]);
            }
        }

        return differenceSet;
    };

    this.subset = function(otherSet){

        if (this.size() > otherSet.size()){
            return false;
        } else {
            var values = this.values();
            for (var i=0; i<values.length; i++){
                if (!otherSet.has(values[i])){
                    return false;
                }
            }
            return true;
        }
    };
}
