function solution(str) {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      //값이 대문자로 바뀌지는 않음 값을 넣어야 바뀐다
      result++;
    }
  }
  console.log(result);
}
solution("KoreaTimeGood"); //charCodeAt  대문자 65~90 소문자 97~122
