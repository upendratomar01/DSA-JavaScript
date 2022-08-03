// TC - Best Case - O(nk)
// TC - Avg Case - O(nk)
// TC - Worst Case - O(nk)
// SC - O(n+k)
// n = length of array, k = number of digits(avg)

function radixSort(arr) {
  let maxLength = largestNum(arr);
  for (let i = 0; i < maxLength; i++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      let num = getNum(arr[j], i);
      if (num !== undefined) buckets[num].push(arr[j]);
    }
    arr = buckets.flat();
  }
  return arr;
}

console.log(radixSort([4, 6, 2, 98, 36, 20, 89, 123, 96, 74, 32, 14, 74]));

function getNum(num, index) {
  const strNum = String(num);
  let end = strNum.length - 1;
  const foundNum = strNum[end - index];
  if (foundNum === undefined) return 0;
  else return foundNum;
}

function largestNum(arr) {
  let largest = "0";
  arr.forEach((num) => {
    const strNum = String(num);
    if (strNum.length > largest.length) largest = strNum;
  });
  return largest.length;
}
