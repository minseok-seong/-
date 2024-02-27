function solution(arr) {
  let s = 0;
  let d = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    s += arr[i][i];
    d += arr[i][arr.length - 1 - i];
  }
  let arr1 = [s, d];
  let garo = 0;
  let sero = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      garo += arr[i][j];
      sero += arr[j][i];
    }
    arr1.push(garo);
    arr1.push(sero);
    garo = 0;
    sero = 0;
  }

  console.log(arr1);
  console.log(Math.max(...arr1));
}

solution([
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
]);
