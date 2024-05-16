////////////////////////////////////////////// arrow functions //////////////////////////////////////////////
function sum(a, b) {
    return a + b;
}

const sum = (a, b) => {
    return a + b;
}

const ans1 = sum(2, 3);
console.log(ans);


////////////////////////////////////////////// map //////////////////////////////////////////////
const input = [1, 2, 3, 4, 5];

function transform(i) {
    return i * 2;
}

const ans2 = input.map(transform);
console.log(ans);

// another way of writing

const ans3 = input.map(function(i) {
    return i * 2;
});
console.log(ans3);


////////////////////////////////////////////// filter //////////////////////////////////////////////
const arr = [1, 2, 3, 4, 5];

function filterLogic(i) {
    return i % 2 === 0;
}

const ans4 = arr.filter(filterLogic);
console.log(ans4);

// another way of writing

const ans5 = arr.filter((i) => {
    return i % 2 === 0;
})
console.log(ans5);