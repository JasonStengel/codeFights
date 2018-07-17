//Some rooms are free (their cost is 0), but that's probably because they are haunted, 
//so all the bots are afraid of them. That is why any room that is free or is located 
//anywhere below a free room in the same column is not considered suitable for the bots to live in.
//Help the bots calculate the total price of all the rooms that are suitable for them.
function matrixElementsSum(matrix) {
    var totalCost = 0;
    var banned = [];
    for(var i = 0; i < matrix.length; i++){
        for(var j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] === 0){
                    banned.push(j);
            }
            else if(banned.indexOf(j) === -1){
                totalCost += matrix[i][j]
                
            }
        }
    }
    return totalCost;
}