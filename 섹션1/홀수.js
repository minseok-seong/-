// 홀수
// 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들
// 중 최소값을 찾는 프로그램을 작성하세요.
// 예를 들어, 7개의 자연수 12, 77, 38, 41, 53, 92, 85가 주어지면 이들 중 홀수는 77, 41, 53,
// 85이므로 그 합은
// 77 + 41 + 53 + 85 = 256
// 이 되고,
// 41 < 53 < 77 < 85
// 이므로 홀수들 중 최소값은 41이 된다.

function solution(arr) {
  let arr2 = arr.filter((a) => a % 2 === 1);
  let sum = arr2.reduce((a, b) => a + b, 0);
  console.log(Math.min(...arr2));
  console.log(sum);
}
solution([12, 77, 38, 41, 53, 92, 85]);
