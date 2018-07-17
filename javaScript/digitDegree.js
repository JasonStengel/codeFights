//Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.
//Given an integer, find its digit degree.
function digitDegree(n) {
    function getSum(num){
        var sum = 0;
        while(num){
            sum += num % 10;
            num = Math.floor(num/ 10);

        }
        return sum;
    }

    var i = 0;
    for(; n > 9; i++){
        n = getSum(n);
    }
    return i;
}