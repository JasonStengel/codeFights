//gets the time based on the bikers timer 
function lateRide(n) {
    var hours = Math.floor(n/60);
    hours = hours < 10 ? "0" + hours : hours + "";
    var minutes = (n % 60) + "";
    minutes = minutes < 10 ? "0" + minutes : minutes + "";
    return +hours[0] + +hours[1] + +minutes[0]  + +minutes[1];
}