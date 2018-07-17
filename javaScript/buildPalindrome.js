//adds letters to the end of  a string to turn it into a palindrome
function buildPalindrome(st) {
//first checks if the string is a palindrome and returns if it is
    if (isPalindrome(st)) {
        return st;
    }
    for (var i = 0; i < st.length; i++) {
        if (isPalindrome(st.slice(i, st.length))) {
            return st + reverse(st.slice(0, i));
        }
    }
}
//checks if its a palindrome by checking each character moving toward the center
function isPalindrome(string) {
    for (var i = 0; i < string.length / 2; i++) {
        if (string[i] != string[string.length - 1 - i]) {
            return false;
        }
    }

    return true;
}
//reverses and returns the string to be joined into a palindrome
function reverse(string) {
    return string.split("").reverse("").join("");
}