//checks if the given input is in proper military time (13:40, 18:45)
function validTime(time) {
 var timeCheck = time.split(":");
 
    if(timeCheck[0] >= 24 || timeCheck[1] >= 60 ){
     return false;
    }
 return true;
}