
let x = 10; 

function moreThenOne() {
    x ++;
}

console.log('What is the number')

moreThenOne()

console.log(x)

// ------

const { prompt } = require('readline-sync')

console.log('What\'s your name?')

const name = prompt()

console.log('Hello ' + name + '!')