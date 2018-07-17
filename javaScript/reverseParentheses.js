//You have a string s that consists of English letters, punctuation marks, whitespace characters, 
//and brackets. It is guaranteed that the parentheses in s form a regular bracket sequence.
//Your task is to reverse the strings contained in each pair of matching parentheses, 
//starting from the innermost pair. The results string should not contain any parentheses.

function reverseParentheses(s) {
    if(s.includes('(')){
        return reverseParentheses(reverseReg(s));
    }
    return s;
}
function reverseReg(s){ 
    var regex = /\(([^()]*)\)/i;
	//finds the parentheses block and puts it in subStr
    var subStr =  regex.exec(s)[1];
    subStr = subStr.split("").reverse().join("");
    return s.replace(regex, subStr);
}