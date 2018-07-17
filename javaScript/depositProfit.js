//calculate years for balance to pass a certain threshold
function depositProfit(deposit, rate, threshold) {
    var count = 0
    while( deposit < threshold){
          deposit += (deposit * (rate / 100))
        count++;
    }
    return count;
}