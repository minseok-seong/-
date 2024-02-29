function solution(arr) {
  let marr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      marr.push(arr[i]);
    }
  }
  arr = arr.filter((a) => a > 0);
  console.log(marr, arr);
  return [...marr, ...arr];
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
