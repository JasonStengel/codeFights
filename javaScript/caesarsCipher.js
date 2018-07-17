//a Caesar Cipher to shift each letter by 13
//A becomes N B becomes O etc.
function rot13(str) { // LBH QVQ VG!
  var encodedString = str.split("");
  var decodedArr = [];
  var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N",
                  "O","P","Q","R","S","T","U","V","W","X","Y",
                 "Z","A","B","C","D","E","F","G","H","I","J","K","L","M"];
  
  /*loops through the split string*/
  for(var i = 0; i < encodedString.length; i++){
    /*checks if the char is between A and Z*/
    if(alphabet.indexOf(encodedString[i]) === -1){
      decodedArr.push(encodedString[i]);
    }
    else{
      /*loop to change each character*/
      for(var j = 0; j < alphabet.length; j++){
         if(encodedString[i] === alphabet[j]){
           decodedArr.push(alphabet[j + 13]);
         }
      }
    
    }
 } 
  console.log(decodedArr);
  return decodedArr.join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");