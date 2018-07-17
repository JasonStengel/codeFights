function mutation(arr) {
  
var stringOne = arr[0].toLowerCase();
var stringTwo = arr[1].toLowerCase();
  //checks if first indxex contains the letters from the second
  for (var i = 0; i < stringTwo.length; i++) {
    //if temp1 doesn't contain the charachter from temp2 return false 
    if (stringOne.indexOf(stringTwo.charAt(i)) == -1) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);