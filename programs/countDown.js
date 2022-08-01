// TC - O(n) - GOOD
function countDown(n) {
  for (let i = n; i > 0; i--) {
    console.log("COUNT : ", i);
  }
  console.log("DONE");
}

countDown(10);

// TC - O(n) - GOOD
function countDownRecursion(n) {
  if (n <= 0) {
    console.log("DONE");
    return;
  }
  console.log("COUNT : ", n);
  n--;
  countDownRecursion(n);
}

countDownRecursion(10);
