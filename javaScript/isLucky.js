//Ticket numbers usually consist of an even number of digits. 
//A ticket number is considered lucky if the sum of the first half of 
//the digits is equal to the sum of the second half.
function isLucky(n) {
    var firstHalf = 0;
    var secondHalf = 0;
    n = n.toString();
    var half = n.length / 2;
    
    for(var i = 0; i < half; i++){
        firstHalf += (parseInt(n[i]));
        secondHalf += parseInt(n[half + i]);
    }
    console.log(firstHalf + "" + secondHalf);
    if(firstHalf == secondHalf){
        return true;
    }
    else{
        return false;
    }

}