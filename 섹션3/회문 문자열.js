function solution(str) {
  let stack = [];
  let str2 = str.toLowerCase();
  for (let i = 0; i < str2.length; i++) {
    if (stack.length === 0) {
      stack.push(str[i]);
    } else if (stack.indexOf(str2[i]) === stack.length - 1) {
      stack.pop();
    } else {
      stack.push(str2[i]);
    }
  }
  console.log(stack);
  console.log(stack.length === 0 ? "YES" : "NO");
}

solution("gooG"); //그냥 문자를 받아서 배열로 변환후 리버스 하고 다시 문자로 바꾼후 비교한다
//추가로 문자열 길이의 절반까지만 순회해서 처음부터와 끝에서부터 비교해서 구한다
