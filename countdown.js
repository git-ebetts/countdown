// //SOLUTION LEVEL 1

var x;
function countdown(seconds){
    x = seconds;
    var intervalID = setInterval(printSeconds, 1000);
    function printSeconds() {
        console.log(x);
        x --;
        if (x < 0) {
            clearInterval(intervalID);
        }
    }
}
countdown(5);

//ALTERNATE LEVEL 1

function countdown(seconds) {
    var intervalID = setInterval(printSeconds, 1000);
    function printSeconds() {
        console.log(seconds);
        seconds --;
        if (seconds < 0) {
            clearInterval(intervalID);
        }
    }
}
countdown(5);

// SOLUTION LEVEL 2

function countdown(seconds) {
    var intervalID = setInterval(printSeconds, 1000);
    function printSeconds() {
        console.log(seconds);
        seconds --;
        var timeoutID = setTimeout(function() {clearInterval(intervalID);}, [6000]);
    }
}
countdown(5);

