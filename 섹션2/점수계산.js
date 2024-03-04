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

function solution(arr) {
  let answer = 0,
    cnt = 0;
  for (let x of arr) {
    if (x === 1) {
      cnt++;
      answer += cnt;
    } else cnt = 0;
  }

  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
