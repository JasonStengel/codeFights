parses a number and checks if it is a ip adress
function isIPv4Address(inputString) {
    var temp = inputString.split(".");
        for(var i = 0; i < temp.length;i++){
            if(temp.length != 4){
                return false;      
            }
            if((temp[i] < 0 || temp[i] > 255) || temp[i] == ""){
                return false;
            }
            if(isNaN(temp[i])){
                return false;
            }
        }      
    return true;
}