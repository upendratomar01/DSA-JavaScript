// TC - Best Case - O(n^2)
// TC - Avg Case - O(n^2)
// TC - Worst Case - O(n^2)
// SC - O(1)

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
    }
  }
  return arr;
}

console.log(selectionSort([4, 6, 2, 98, 36, 20, 89, 123, 96, 74, 32, 14, 74]));
