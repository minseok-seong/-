function solution(arr1, arr2) {
  let arr = [...arr1, ...arr2].sort((a, b) => a - b);

  console.log(arr);
}
solution([1, 3, 5], [2, 3, 6, 7, 9]);
