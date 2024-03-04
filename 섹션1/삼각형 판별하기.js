function solution(a, b, c) {
  let arr = [a, b, c];
  arr.sort((a, b) => b - a);
  return arr[0] < arr[1] + arr[2] ? "yes" : "no";
}

console.log(solution(3, 4, 5));
