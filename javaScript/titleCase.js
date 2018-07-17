//capitalize the first letter of each word in a sentence
function titleCase(str) {
  var capitalize = str.split(" ");
  for(var i = 0; i  < capitalize.length; i++){ 
   capitalize[i] = capitalize[i].toLowerCase();
    var temp = capitalize[i].charAt(0).toUpperCase();
    capitalize[i] = temp + capitalize[i].substr(1);
  }
  return capitalize.join(" ");
}
  titleCase("I'm a little tea pot");