function solution(k, arr) {
  let max = 0;
  let hap = 0;
  for (let i = 0; i <= arr.length - k; i++) {
    hap += arr[i];

    if (i >= k - 1) {
      if (max < hap) max = hap;
      hap -= arr[i - (k - 1)];
    }
  }
  console.log(max);
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a)); //슬라이딩 윈도우
