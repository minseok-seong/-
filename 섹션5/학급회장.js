function solution(s) {
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    if (!obj[s[i]]) {
      obj[s[i]] = 1;
    } else {
      obj[s[i]] += 1;
    }
  }
  let big = Math.max(...Object.values(obj));
  for (k in obj) {
    if (obj[k] === big) {
      return k;
    }
  }
}

// let str = "BACBACCACCBDEDE";
// console.log(solution(str));

// function solution(s) {
//   let answer;
//   let sH = new Map();
//   for (let x of s) {
//     if (sH.has(x)) sH.set(x, sH.get(x) + 1);
//     else sH.set(x, 1);
//   }
//   let max = Number.MIN_SAFE_INTEGER;
//   for (let [key, val] of sH) {
//     if (val > max) {
//       max = val;
//       answer = key;
//     }
//   }
//   return answer;
// }

// let str = "BACBACCACCBDEDE";
// console.log(solution(str));
