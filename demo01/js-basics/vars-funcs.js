console.log('hello sachin')

let x = 10
console.log(x/4)

function add (a, b) {
    return a+b
}

function printVal(arg) {
    console.log('arg = ', arg)
}

function area(a,b) {
    if (typeof b === 'undefined') {
        return a * a * Math.PI
    } else {
        return a*b
    }
}

function area()