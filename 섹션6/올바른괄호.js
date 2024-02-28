function solution(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.at(-1) === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  console.log(stack);
  return stack.length === 0 ? "yes" : "no";
}

let a = "(()(()))(()";
console.log(solution(a));
