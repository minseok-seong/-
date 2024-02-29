function solution(s) {
  let stack = [];
  let str = "";
  let result = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === ")") {
      if (stack.length === 0) {
        stack.push(s[i]);
        str + "";
      }
      if (stack[0] === s[i]) {
        str = "";
        stack.shift();
        stack.push(s[i]);
      } else {
        result.push(str);
        stack.shift();
      }
    } else {
      str += s[i];
    }
  }
}

let str1 = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str1));
