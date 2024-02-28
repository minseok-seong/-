function solution(k, arr) {
  let result = [];
  for (let i = 0; i <= arr.length - k; i++) {
    result.push(arr.slice(i, i + k).reduce((acc, v) => acc + v, 0));
  }
  console.log(result);
  return Math.max(...result);
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
