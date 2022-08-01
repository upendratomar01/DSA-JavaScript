// TC - O(n^2) - VERY BAD
function sameSquaredArray(arr, sqrArr) {
  if (arr.length !== sqrArr.length) return false;
  for (let i = 0; i < arr.length; i++) {
    let item = sqrArr.indexOf(arr[i] ** 2);
    if (item === -1) return false;
    sqrArr.splice(item, 1);
  }
  return true;
}

console.log(sameSquaredArray([2, 3, 7, 6, 8], [36, 49, 64, 9, 4]));

// TC - O(n) - GOOD
// FREQUENCY COUNTER PATTERN
function sameSquaredArrayFast(arr, sqrArr) {
  if (arr.length !== sqrArr.length) return false;
  let fc1 = {};
  let fc2 = {};

  for (let a of arr) fc1[a] = (fc1[a] || 0) + 1;
  for (let a of sqrArr) fc2[a] = (fc2[a] || 0) + 1;

  for (let key in fc1) {
    if (!(key ** 2 in fc2)) return false;
    if (fc2[key ** 2] !== fc1[key]) return false;
  }

  return true;
}

console.log(sameSquaredArrayFast([2, 3, 7, 6, 8], [36, 49, 64, 9, 4]));
