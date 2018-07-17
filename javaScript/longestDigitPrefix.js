//Given a string, output its longest prefix which contains only digits.
function longestDigitsPrefix(inputString) {
	//checks the beginning of the string for any digits and returns them
    return inputString.match(/^\d*/)[0];
}
