// TC - O(n^2)
function anagramString(str1, str2) {
  if (str1.length !== str2.length) return false;
  let arr1 = str1.split("");
  let arr2 = str2.split("");
  // O(n)
  for (let v of arr1) {
    let item = arr2.indexOf(v); // O(n)
    if (item === -1) return false;
    arr2.splice(item, 1);
  }
  return true;
}

console.log(anagramString("daldaoo", "aoodadl"));

// TC - O(n) - GOOD
// FREQUENCY COUNTER PATTERN
function anagramStringFast(str1, str2) {
  if (str1.length !== str2.length) return false;
  let fc = {};
  // O(n)
  for (let a of str1) {
    fc[a] = (fc[a] || 0) + 1;
  }
  // O(n)
  for (let key of str2) {
    if (!fc[key]) return false;
  }
  return true;
}

console.log(anagramStringFast("dalda", "adadl"));
