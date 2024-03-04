function solution(arr) {
  let hap = 0;
  let arr2 = [];
  arr = arr.map((a) => a + "");
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      hap += +arr[i][j];
    }
    arr2.push(hap);
    hap = 0;
  } //

  let index1 = 0;
  let index2 = 0;
  console.log(arr2);
  index1 = arr2.indexOf(Math.max(...arr2));
  index2 = arr2.lastIndexOf(Math.max(...arr2));
  console.log(index1, index2);
  index1 === index2
    ? console.log(+arr[index1])
    : console.log(Math.max(...[+arr[index1], +arr[index2]]));
}

solution([128, 460, 603, 40, 551, 137, 123]); //이코드의 문제는 만약 똑같은 합의 값이 3개인경우에 에러가 생김

function solution(n, arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    let sum = x
      .toString()
      .split("")
      .reduce((a, b) => a + Number(b), 0);
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }
  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
