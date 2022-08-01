// TC - O(n) - GOOD
// TWO POINTER PATTERN
function areDublicates(arr) {
  let a = [...arr];
  let start = 0;
  let next = 1;
  a.sort((a, b) => a - b);
  while (next < a.length) {
    if (a[start] === a[next]) return true;
    start++;
    next++;
  }
  return false;
}

console.log(areDublicates([1, 2, 0, 4, 3, 5, 6, 3, 8, 1, 9, 1, 3, 2, 5]));

function areDublicatesShort(arr) {
  return new Set(arr).size !== arr.length;
}

console.log(areDublicatesShort([1, 2, 0, 4, 3, 5, 6, 3, 8, 1, 9, 1, 3, 2, 5]));
