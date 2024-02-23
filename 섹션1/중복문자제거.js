function solution(str) {
  let arr = str.split("");
  console.log([...new Set(arr)].join(""));
}

solution("ksekkset");
