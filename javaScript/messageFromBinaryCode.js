//converts a binary code to a string 
function messageFromBinaryCode(code) {
	//splits the binary code into equal 8 character pieces
    var a = code.match(/.{1,8}/g);
    var asciiCodes = [];
    
	//convets each 8 piece binary code
    for(var i = 0; i < a.length; i++){
        asciiCodes.push(parseInt( a[i], 2 ));
        asciiCodes[i] = String.fromCharCode(asciiCodes[i]);
    }     
    return asciiCodes.join("");
}