//calculate the max phone call length given change in account
function phoneCall(min1, min2_10, min11, s) {
    var first_10_mins_price = min1 + min2_10*9;
    var first_minutes = s / first_10_mins_price; 
    var remaining_minutes = 0;
    
    if(first_minutes >= 1){
        first_minutes = Math.floor(first_minutes)*10;      
        var remaining_cash = s % first_10_mins_price; 
        remaining_minutes = Math.floor(remaining_cash/min11)
    }else{
        first_minutes = Math.floor(first_minutes*10);       
    }
    
    return first_minutes + remaining_minutes; 
}