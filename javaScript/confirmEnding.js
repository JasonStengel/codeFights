//checks if the end of a string contains a desired word or letter;
 confirmEnding(str, target) {
  return str.substr(str.indexOf(target)) == target;
}
