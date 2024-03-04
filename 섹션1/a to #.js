function solution(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "A") {
      result += "#";
    } else {
      result += str[i];
    }
  }
  console.log(result);
}
solution("BANANA"); //replace로 풀수도 있다
