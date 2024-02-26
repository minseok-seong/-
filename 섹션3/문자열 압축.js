function solution(str) {
  let result = {};
  let str1 = "";
  for (let i = 0; i < str.length; i++) {
    if (!result[str[i]]) {
      result[str[i]] = 1;
    } else {
      result[str[i]] += 1;
    }
  }
  console.log(result);
  for (k in result) {
    if (result[k] === 1) {
      str1 += k;
    } else {
      str1 += k + result[k];
    }
  }
  console.log(str1);
}

solution("KKHSSSSSSSE");
solution("aabdfr");
