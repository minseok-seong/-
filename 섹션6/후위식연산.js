function solution(s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) {
      arr.push(+s[i]);
    } else {
      if (s[i] === "+") {
        let hap = arr.at(-1) + arr.at(-2);
        arr.pop();
        arr.pop();
        arr.push(hap);
        console.log(arr);
      } else if (s[i] === "-") {
        let cha = arr.at(-2) - arr.at(-1);
        arr.pop();
        arr.pop();
        arr.push(cha);
      } else if (s[i] === "*") {
        let gob = arr.at(-1) * arr.at(-2);
        arr.pop();
        arr.pop();
        arr.push(gob);
        console.log(arr);
      } else {
        let div = arr.at(-1) / arr.at(-2);
        arr.pop();
        arr.pop();
        arr.push(div);
      }
    }
  }
  console.log(arr);
  return arr.join("");
}

let str = "352+*9-";
console.log(solution(str));
