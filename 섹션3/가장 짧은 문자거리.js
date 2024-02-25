function solution(str1, str2) {
  let arr = str1.split("").map((a) => a.charCodeAt());
  let str2n = str2.charCodeAt();
  let result = arr.map((a) => Math.abs(a - str2n));

  console.log(result.join(" "));
}

solution("teachermode", "e");
