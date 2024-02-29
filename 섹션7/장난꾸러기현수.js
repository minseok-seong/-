function solution(arr) {
  let me = 0;
  let meI = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= arr[i + 1]) {
      me = arr[i];
      meI.push(i + 1);
      break;
    }
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < arr[i - 1]) {
      meI.push(i + 1);
      break;
    }
  }
  return meI;
}

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));
