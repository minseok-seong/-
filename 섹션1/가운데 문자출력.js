function solution(str) {
  let result = "";
  if (str.length % 2 === 0) {
    result =
      str[Math.floor(str.length / 2) - 1] + str[Math.floor(str.length / 2)];
  } else {
    result = str[Math.floor(str.length / 2)];
  }
  console.log(result);
}

solution("good");
