// TC - Best Case - O(n)
// TC - Avg Case - O(n^2)
// TC - Worst Case - O(n^2)
// SC - O(1)

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(
  insertionSort([4, 6, 2, 98, 36, 20, 89, 123, 65, 41, 96, 74, 32, 14, 74])
);
