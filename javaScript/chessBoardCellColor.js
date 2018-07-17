function chessBoardCellColor(cell1, cell2) {
    
    //checks if both the cells are odd by adding the letter and number of its index
    if((parseInt(cell1.charCodeAt(1)) + parseInt(cell1.charCodeAt(0) - 64)) % 2 != 0){
        if((parseInt(cell2.charCodeAt(1)) + parseInt(cell2.charCodeAt(0) - 64)) % 2 != 0){
            return true
        }
        else{
            return false;
        }
    }
    
    //checks if both the cells are even by adding the letter and number of its index
    else if((parseInt(cell1.charCodeAt(1)) + parseInt(cell1.charCodeAt(0) - 64)) % 2 == 0 ){
         if((parseInt(cell2.charCodeAt(1)) + parseInt(cell2.charCodeAt(0) - 64)) % 2 == 0 ){
            return true;
        }
        else{
            return false
        }
    }
    
    //anything else is false
    else{
        return false;
    }
}