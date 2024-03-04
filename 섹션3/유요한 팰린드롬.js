function solution(str) {
  str = str
    .split("")
    .filter((a) => a.charCodeAt())
    .join("")
    .toLowerCase();

  let reverse = "";
  let no = "";
  for (let i = 0; i < str.length; i++) {
    no += str[i];
  }

  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  console.log(no, reverse);

  console.log(no === reverse ? "Yes" : "No");
}

solution("found7, time: study; Yduts; emit, 7Dnuof"); //정규식으로 문자만 필터가능하다 replace 와 정규식 조합
