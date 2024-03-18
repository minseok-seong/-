function solution(arr) {
  const dp = new Array(arr.length).fill(1);
  dp[0] = 1;
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] > arr[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  console.log(dp);
  console.log(Math.max(...dp));
}

let arr = [5, 3, 7, 8, 6, 2, 9, 4];
solution(arr);
