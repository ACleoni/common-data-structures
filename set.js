// Sets


// A set implemented as a function
function f_Set() {
    // the var collection will hold the set
    var collection = [];
    // checks for the presence of an element and return true or false
    this.has = function(e) {
        return (collection.indexOf(e) !== -1)
    };
    // returns all values in the set
    this.values = function() {
        return collection;
    };
    // add and element to the set
    this.add = function(e) {
        if(!this.has(e))
        {
            collection.push(e)
            return true
        };
        return false
    }
}

// A set implemented as a class
class Set {
    constructor() {
        this.collection = [];
    };

    has(element) {
        return (this.collection.indexOf(element) !== -1);
    };

    values() {
        return this.collection;
    };

    add(element) {
        if (!this.has(element)) {
            this.collection.push(element)
            return true;
        }
        return false;
    };

    remove(element) {
        if (this.has(element)) {
            index = this.collection.indexOf(element);
            this.collection.splice(index, 1);
            return true;
        }
        return false
    }
};

const set = new Set()
set.add(1);
console.log(set.has(1))
console.log(set.values())

