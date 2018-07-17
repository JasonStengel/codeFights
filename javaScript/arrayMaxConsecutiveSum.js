//Given array of integers, find the maximal possible sum of some of its k consecutive elements.
//For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
//arrayMaxConsecutiveSum(inputArray, k) = 8.
//All possible sums of 2 consecutive elements are:
function arrayMaxConsecutiveSum(inputArray, k) {
  var result = 0,
    currentSum = 0;
  for (var i = 0; i < k - 1; i++) {
    currentSum += inputArray[i];
  }
  for (var i = k - 1; i < inputArray.length; i++) {
    currentSum += inputArray[i];
    if (currentSum > result) {
      result = currentSum;
    }
    currentSum -= inputArray[i - k + 1];
  }
  return result;
}