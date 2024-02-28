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

let str = "BACBACCACCBDEDE";
console.log(solution(str));
