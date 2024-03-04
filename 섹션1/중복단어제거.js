function solution(str) {
  console.log([...new Set(str)].join(" "));
  return str.filter((a, i) => str.indexOf(a) === i);
}

solution(["good", "time", "good", "time", "student"]);
