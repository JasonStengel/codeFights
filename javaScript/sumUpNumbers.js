//adds all the numbers in the given string
function sumUpNumbers(inputString) {
    var temp = inputString.split(/[\D]/);
    var sum = 0;
    
    //checks if the index is NaN then adds it 
    //to the total if it is one
    for(var i = 0; i < temp.length; i++){
        if(!isNaN(parseInt(temp[i]))){
            sum += parseInt(temp[i]);
            console.log(sum);
        }
    }
    return sum;
}