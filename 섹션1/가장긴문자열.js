function solution(str) {
  let arr = str.map((a) => a.length);
  let big = Math.max(...arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === big) {
      console.log(str[i]);
    }
  }
}
solution(["teacher", "time", "student", "beautiful", "good"]);
