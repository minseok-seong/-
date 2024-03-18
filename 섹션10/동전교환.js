function solution(m, coin) {
  const dp = new Array(m + 1).fill(0);
  dp[0] = 0;
  for (let i = 0; i < coin.length; i++) {
    //1,2,5
    for (let j = coin[i]; j < dp.length; j++) {
      //1 15
      dp[j] = dp[j - coin[i]] + 1;
    }
  }
  console.log(dp[m]);
}
let arr = [1, 2, 5];
console.log(solution(15, arr));
