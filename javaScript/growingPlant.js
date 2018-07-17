//Each day a plant is growing by upSpeed meters. Each night that plant's height decreases by downSpeed 
//meters due to the lack of sun heat. Initially, plant is 0 meters tall. We plant the seed at the beginning of a day. 
//We want to know when the height of the plant will reach a certain level.

function growingPlant(upSpeed, downSpeed, desiredHeight) {
    var temp = 0;
    var count= 0;
	//if the up speed is higher or equal to desired height return 1
    if(upSpeed >= desiredHeight){
        return 1;
    }
	//checks if desired hight has been reached
    while(temp <= desiredHeight){
        temp += upSpeed;
        count++;
        if(temp >= desiredHeight){
            return count; 

        }
        else{
            temp -= downSpeed;
        }
    }
}
