function solution(str) {
  let arr = str.split("");
  console.log([...new Set(arr)].join("")); //filter와 indexOf조합으로 풀수 있다
}

solution("ksekkset");
