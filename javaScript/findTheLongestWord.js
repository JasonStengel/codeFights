//finds the longest word in a string after removing anything that isnt a letter
function longestWord(text) {
 
        //removes brackets for test six on codefigts
        var temp = text.replace(/[\[\]']/g,' ' );
        var sSplitString = temp.split(" ");
   console.log(temp);
        var words = [];
        var longest = "";
       console.log(temp);
        //removes everything that isnt a letter from the words
        for(var i = 0; i < sSplitString.length; i++){
               words.push(sSplitString[i].replace(/[^A-Za-z]/gi, ''));
        }
       console.log(words)
        //finds the longest word in the array
        for(var i = 0; i < words.length; i++){
          if(words[i].length > longest.length){
              longest = words[i];
          }
        }
       return longest;
}