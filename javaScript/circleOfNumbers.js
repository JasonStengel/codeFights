//Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.
function circleOfNumbers(n, firstNumber) {
    if(firstNumber > n/2 -1){
        return ( firstNumber - (n /2));
    }
    return ( firstNumber + (n /2));
}