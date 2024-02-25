function solution(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      result += str[i];
    }
  }
  console.log(+result);
}

solution("g0en2T0s8eSoft");
