function solution(n, k) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  let count = 1;
  let c = 1;
  console.log(arr);
  while (true) {
    for (let i = 0; i < arr.length; i++) {
      if (arr.length === 1) {
        return arr;
      }
      if (count === k * c) {
        console.log(i, count);
        arr.splice(i - (c - 1), 1);
        count++;
        c++;
      } else {
        count++;
      }
      if (i === arr.length - 1) {
        i = 0;
      }
    }
  }

  console.log(arr);
}

console.log(solution(8, 3));
