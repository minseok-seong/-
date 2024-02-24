function solution(a, arr) {
  let result = [];
  result.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > a - 1) {
      result.push(arr[i]);
    }
  }
  console.log(result);
}

solution(6, [7, 3, 9, 5, 6, 12]);
