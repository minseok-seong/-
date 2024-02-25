function solution(arr) {
  let result = 0;
  let arr2 = arr.join("").split("0");
  let arr3 = arr2.map((a) => a.length);

  for (let i = 0; i < arr3.length; i++) {
    for (let j = 1; j <= arr3[i]; j++) {
      result += j;
    }
  }
  console.log(result);
}

solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]);
