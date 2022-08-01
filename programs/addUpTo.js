// TC - O(n) - SLOW
function addUpTo(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(addUpTo(10));

// TC - O(1) - VERY FAST
function addUpToFast(n) {
  return (n * (n + 1)) / 2;
}

console.log(addUpToFast(10));
