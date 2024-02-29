function solution(need, plan) {
  let arr = need.split("");
  for (let i = 0; i < plan.length; i++) {
    if (plan[i] === arr[0]) {
      arr.shift();
    }
  }
  if (arr.length > 0) {
    return "No";
  } else {
    return "yes";
  }
}

let a = "CBA";
let b = "CBDAGE";
console.log(solution(a, b));
