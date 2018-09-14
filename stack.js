// Stacks

// functions: push, pop, peek, length

// Using an array as a stack
let letters = [];

let word = 'racecar';

let reverseWord = '';

// Put letters of word into the stack
for (let i=0; i < word.length; i++)
    {
	letters.push(word[i]);
    };

// Pop off the stack in reverse order
// Last in first out
for (let i=0; i < word.length; i++)
    {
	reverseWord += letters.pop();
    };

if (reverseWord === word)
    {
	console.log(word + ' is a palindrome');
    }
    else
    {
	console.log(word + ' is not a palindrome');
    }


// Creating a Stack
const Stack = function() { 
    this.count = 0;
    this.storage = {};
    // Adds a value onto the end of the stack
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }
    // Removes and returns the value at the end of the stack
    this.pop = function() {
        if (this.count === 0) 
        {
            return undefined
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }
    // Returns the the size of the stack
    this.size = function() {
        return this.count;
    }
    // Returns the last value in the stack
    this.peek = function() {
        return this.storage[this.count - 1]
    }
}

const myStack = new Stack();

myStack.push('Alexander')
console.log(myStack.size())
console.log(myStack.storage)

myStack.push('Cleoni')
console.log(myStack.peek())
console.log(myStack.count)

myStack.pop()
console.log(myStack.count)
