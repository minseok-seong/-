function solution(str) {
  let result = "";
  if (str.length % 2 === 0) {
    result =
      str[Math.floor(str.length / 2) - 1] + str[Math.floor(str.length / 2)]; //이렇게 더하지말고 그냥 뽑아내라
  } else {
    result = str[Math.floor(str.length / 2)];
  }
  console.log(result);
}

solution("good"); //substring(2,4) 2번 인덱스부터 4번 인덱스 전까지 이걸로도 해결가능
