//finds the smallest number who digits multiplied equal the given number 
function digitsProduct(product){
    
       //function to get the product of the current number being tested
       function findSmallest(test){
           var testNumber = test.toString().split("");
           var smallestNumber = 1;
           for(var i = 0; i < testNumber.length; i++){
               smallestNumber *= parseInt(testNumber[i]);
           }
           return smallestNumber;
       } 
    //tests if the product is equal to the given number
    for(var i = 1; i < 5000; i++){
        if(findSmallest(i) === product){
            return i;
        }
    }
    return -1;
}