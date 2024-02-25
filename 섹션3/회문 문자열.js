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

solution("gooG");
