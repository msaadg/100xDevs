// Promise Chaining
function mySetTimeout(duration) {
    return new Promise(function(resolve) {
        setTimeout(resolve, duration)
    })
}

mySetTimeout(1000).then(function() {
    console.log('First');
    return mySetTimeout(2000);
}).then(function() {
    console.log('Second');
});