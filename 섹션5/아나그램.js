function solution(str1, str2) {
  let arr1 = str1.split("").sort();
  let arr2 = str2.split("").sort();
  let obj = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!obj[arr1[i]]) {
      obj[arr1[i]] = 1;
    } else {
      obj[arr1[i]] += 1;
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!obj[arr2[i]]) {
      obj[arr2[i]] = 1;
    } else {
      obj[arr2[i]] += 1;
    }
  }

  return Object.values(obj).filter((a) => a % 2 !== 0).length === 0
    ? "Yes"
    : "No";
}

let a = "abaCC";
let b = "Caaab";
console.log(solution(a, b));
