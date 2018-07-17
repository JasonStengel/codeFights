//finds all the squares in a matrix and returns the amount without duplicates
function differentSquares(matrix) {
    var noDupes = new Set;
    
    //puts each 4 number set into the set
    for(var i = 0; i<matrix.length-1; i++){
        for(var j = 0; j < matrix[0].length-1; j++){
            var square = matrix[i][j] + 10*matrix[i][j+1] + 100*matrix[i+1][j] + 1000*matrix[i+1][j+1];
            noDupes.add( square );
        }
    }
    return noDupes.size;
}