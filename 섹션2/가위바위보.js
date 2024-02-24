function solution(arr) {
  let count = 1;
  let flag = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > flag) {
      count = count + 1;
      flag = arr[i];
    }
  }
  console.log(count);
}

solution([130, 135, 148, 140, 145, 150, 150, 153]);
