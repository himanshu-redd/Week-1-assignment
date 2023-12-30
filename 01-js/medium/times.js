/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/
function runLoop(range) {
    const startTime = new Date();
    for (var i = 1; i <= range; i++) {
        i++;
    }
    const endTime = new Date();
    console.log("start time : " + startTime.getTime() + " end time : " + endTime.getTime());
    return endTime.getTime() - startTime.getTime();

}

function calculateTime(n) {
    var seconds;
    seconds = runLoop(100);
    console.log("1-100 : " + seconds);
    seconds = runLoop(10000);
    console.log("1-10000 : " + seconds);
    seconds = runLoop(1000000);
    console.log("1-1000000 : " + seconds);

}

calculateTime(); 