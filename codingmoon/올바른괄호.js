// 올바른 괄호 체크는 기본적으로 스택구조 활용한다  lifo
//모든 순회후 길이를 체크한다

function solution(input) {
  const stack = [];
  for (const char in input) {
    if (char === "[" || char === "{" || char === "(") {
      stack.push(input);
    } else {
      const last = stack.pop();
      if (
        (char === "}" && last !== "{") ||
        (char === "[" && last !== "]") ||
        (char === "(" && last !== ")")
      ) {
        return false;
      }
    }
  }
  return stack.length === 0 ? true : false;
}
