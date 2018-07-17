//tells the user if the passed in literal is a "beautiful string"
//where each letter cant occur more that the previous one alphabetically
//for example aabbbcc should return false
function isBeautifulString(inputString) {
    var sString = inputString.split("");
    var MAX = inputString.length;
    var iCount = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    console.log(sString);
    for (let j = 0; j < MAX; j++){
		iCount[sString[j].charCodeAt() - 'a'.charCodeAt()]++;
    }
    console.log(iCount);
    for (let i = 0; i < iCount.length; i++){
		if(iCount[i] < iCount[i+1]){
            return false;
        }
    }
    return true;
}