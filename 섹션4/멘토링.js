function solution(arr) {
  let result = [];
  for (let i = 0; i < arr[0].length; i++) {
    for (let j = i + 1; j < arr[0].length; j++) {
      let f = arr[0][i];
      let s = arr[0][j];
      let flag = [];
      for (let k = 1; k < 3; k++) {
        arr[k].indexOf(f) < arr[k].indexOf(s)
          ? flag.push(true)
          : flag.push(false);
      }
      console.log(flag);
      if (flag.filter((a) => a === true).length === 2) result.push([f, s]);
    }
  }
  console.log(result);
}

solution([
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
]);
