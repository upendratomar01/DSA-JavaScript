// Optimized Bubble Sort Algorithm with noSwap
// TC - Best Case - O(n)
// TC - Avg Case - O(n^2)
// TC - Worst Case - O(n^2)
// SC - O(1)

function bubleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

console.log(
  bubleSort([4, 6, 2, 98, 36, 20, 89, 123, 65, 41, 96, 74, 32, 14, 74])
);
