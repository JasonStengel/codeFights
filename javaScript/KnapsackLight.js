//You found two items in a treasure chest! The first item weighs weight1 and is worth value1, 
//and the second item weighs weight2 and is worth value2. What is the total maximum value of the items 
//you can take with you, assuming that your max weight capacity is maxW and you can't come back for the items later?

function knapsackLight(value1, weight1, value2, weight2, maxW) {
		//check if you can carry both items
        if(weight1 + weight2 <= maxW){
                return value1 + value2;
        }
		//checks if you cant carry either of them
        else if ((weight1 > maxW) && (weight2 > maxW)){
                return 0;
        }
		//check for the highest value between the two and returns it
        else if ((weight1 <= maxW) && (weight2 <= maxW)){
                if(value1 >= value2){
                        return value1;
                }
                else if (value2 >= value1) {
                        return value2;
                }
        }
		//checks if item one is less weight and item two is more
        else if(weight1 <= maxW && weight2 >= maxW){
                return value1;         
        }
        else{
                return value2;
        }
}