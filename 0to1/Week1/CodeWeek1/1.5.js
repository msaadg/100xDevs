// read from a .txt file

const fs = require('fs');

fs.readFile('a.txt', 'utf-8', function(err, data) {
    console.log(data)
} )

console.log("hello world1")

for (let i = 0; i < 1000000000; i++) {
    // do nothing
}

console.log("hello world2")


//  ------------------------------------ PROMISES ------------------------------------ //

const fs = require('fs');

// my own asynchronous function
function kiratsReadFile() {
  return new Promise(function(resolve) {
    fs.readFile("a.txt", "utf-8", function(err, data) {
      resolve(data);
    });
  })
}

// callback function to call
function onDone(data) {
  console.log(data)
}

kiratsReadFile().then(onDone);


// ------------------------------------ ASYNC AWAIT - INTRO ------------------------------------ //

function kiratsAsyncFunction() {
    let p = new Promise(function(resolve) {
      // do some async logic here
      resolve("hi there!")
    });
    return p;
}
  
function main() {
    kiratsAsyncFunction().then(function(value) {
        console.log(value);
    });
}

main();


// ------------------------------------ SAME CODE BUT WITH ASYNC AWAIT ------------------------------------ //

function kiratsAsyncFunction() {
    let p = new Promise(function(resolve) {
        // do some async logic here
        resolve("hi there!")
    });
    return p;
}

async function main() {
    const value = await kiratsAsyncFunction();
    console.log(value);
}

main();