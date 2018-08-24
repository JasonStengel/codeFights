def isWordPalindrome(word):
#uses [begin:end:step] syntax leaving begin and end off with a step of -1 reverses the string
    return word == word[::-1]
