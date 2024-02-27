function solution(total, arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i][0] = arr[i][0] / 2;
    arr2.push(arr[i][0] + arr[i][1]);
  }
  arr2.sort((a, b) => a - b);
  let result = 0;
  console.log(arr2);
  for (let i = 0; i < arr2.length; i++) {
    if (total - arr2[i] > 0) {
      result++;
      total = total - arr2[i];
    }
  }

  console.log(result);
}
solution(28, [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
]);
