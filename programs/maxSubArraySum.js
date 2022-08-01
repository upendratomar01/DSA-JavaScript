const testArr = [2, 9, 4, 3, 6, 7, 9, 3, 14, 7, 8, 6, 2, 5, 8];

// TC - O(n^2) - VERY BAD
function maxSubArraySum(arr, n) {
  if (n > arr.length) return null;
  let max = 0;
  for (let i = 0; i < arr.length - n + 1; i++) {
    let tempSum = 0;

    for (let j = 0; j < n; j++) {
      tempSum += arr[i + j];
    }
    if (tempSum > max) max = tempSum;
  }
  return max;
}

console.log(maxSubArraySum(testArr, 3));

// TC - O(n) - GOOD
// SLIDING WINDOW PATTERN
function maxSubArraySumFast(arr, n) {
  if (n > arr.length) return null;
  let maxSum = 0;
  let tempSum = 0;
  // O(n)
  for (let i = 0; i < n; i++) maxSum += arr[i];
  tempSum = maxSum;
  // O(n)
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = tempSum > maxSum ? tempSum : maxSum;
  }

  return maxSum;
}

console.log(maxSubArraySumFast(testArr, 3));
