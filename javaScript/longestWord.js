//finds the longest word in a sentence
function findLongestWord(str) {
  var strLengths = str.split(" ");
  var largest = 0;
  for(var i = 0; i < strLengths.length; i++){
    if(strLengths[i].length > largest){
      largest = strLengths[i].length;
    }
  }
  return largest;
  
}
findLongestWord("The quick brown fox jumped over the lazy dog");