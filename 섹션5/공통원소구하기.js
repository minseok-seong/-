function solution(arr1, arr2) {
  let obj = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!obj[arr1[i]]) {
      obj[arr1[i]] = 1;
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!obj[arr2[i]]) {
      obj[arr2[i]] = 1;
    } else {
      obj[arr2[i]] += 1;
    }
  }
  let result = [];
  for (k in obj) {
    if (obj[k] > 1) {
      result.push(+k);
    }
  }
  console.log(result);

  return result.sort((a, b) => a - b);
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
