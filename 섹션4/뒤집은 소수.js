function isPrime(n) {
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  if (count > 0) {
    return false;
  } else {
    return true;
  }
}
function solution(arr) {
  let str = "";
  let arr2 = [];
  arr = arr.map((a) => a + "");
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr[i].length - 1; j >= 0; j--) {
      str += arr[i][j];
    }
    arr2.push(+str);
    str = "";
  }
  console.log(arr2);
  let result = [];
  for (let i = 0; i < arr2.length; i++) {
    if (isPrime(arr2[i])) {
      result.push(arr2[i]);
    }
  }
  console.log(result.filter((a) => a !== 1));
}

solution([32, 55, 62, 20, 250, 370, 200, 30, 100]);
