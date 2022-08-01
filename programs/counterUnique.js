// TC - O(n) - GOOD
function countUnique(arr) {
  if (arr.length === 0) return 0;
  let unique = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[unique] !== arr[i]) {
      unique++;
      arr[unique] = arr[i];
    }
  }
  return unique + 1;
}

console.log(countUnique([1, 1, 3, 3, 5, 6, 6, 8, 8, 5, 0, 0, 2]));
