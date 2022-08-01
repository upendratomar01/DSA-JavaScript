// TC - O(n^2) - VERY BAD
function sumZero(arr) {
  if (arr.length === 0) return null;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
    }
  }
  return null;
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));

// TC - O(n) - GOOD
// TWO POINTER PATTERN
function sumZeroFast(arr) {
  if (arr.length === 0) return null;
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) return [arr[left], arr[right]];
    else if (sum > 0) right--;
    else left++;
  }
}

console.log(sumZeroFast([-4, -3, -2, -1, 0, 1, 2, 5]));
