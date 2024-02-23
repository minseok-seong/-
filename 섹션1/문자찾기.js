function solution(str, s) {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === s) {
      result++;
    }
  }
  console.log(result);
}
solution("COMPUTERPROGRAMMING", "R");
