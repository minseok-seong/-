function solution(str) {
  console.log([...new Set(str)].join(" "));
}

solution(["good", "time", "good", "time", "student"]);
