function solution(n, arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        arr2.push(arr[i] + arr[j] + arr[k]); //배열말고 set자료구조를 쓰면 중복이 제거된다 셋을 쓰자
      }
    }
  }
  arr2.sort((a, b) => b - a);

  console.log(arr2[n - 1]);
}

solution(3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]);
