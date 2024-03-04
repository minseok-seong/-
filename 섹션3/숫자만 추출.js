function solution(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      result += str[i];
    }
  }
  console.log(+result);
}

solution("g0en2T0s8eSoft"); //isNaN 숫자를 찾을수 있다 숫자면 false
//만약 문자열로 000205이런식이면 앞에 +,  parseInt를 하면 0이 날아감
