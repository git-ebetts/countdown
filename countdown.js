//SOLUTION LEVEL 1

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