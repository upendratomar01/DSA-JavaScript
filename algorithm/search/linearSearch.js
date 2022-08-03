// TC - Best Case - O(1)
// TC - Avg Case - O(n)
// TC - Worst Case - O(n)
// SC - O(1)

function linearSearch(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

linearSearch([34, 51, 1, 2, 3, 45, 56, 687], 100);
