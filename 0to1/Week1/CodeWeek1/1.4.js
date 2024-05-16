console.log("hello world")


// an example of callback using sum and displaying the result

function sum(num1, num2, fn) {
    let result = num1 + num2
    fn(result)
}

function display1(result) {
    console.log("The result is: " + result)
}

function display2(result) {
    console.log("This is the final result: " + result)
}

sum(5, 10, display2)


// an example of anonymous function

function sum(num1, num2, fn) {
    let result = num1 + num2
    fn(result)
}

sum(5, 10, function(result) {
    console.log("The result is: " + result)
})


// an example of setTimeout

setTimeout(function() {
    console.log("Hello")
}, 5000)
