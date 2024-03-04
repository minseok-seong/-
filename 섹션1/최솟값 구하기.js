// 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요

function solution(a, b, c, d, e, f, g) {
  let arr = [a, b, c, d, e, f, g];
  console.log(Math.min(...arr)); //인자가 배열이 아니다  ex)1,2,3,이런식으로
}

solution(5, 3, 7, 11, 2, 15, 17);
//미니멈은 변수에 가장큰값을 적어놓고 순회한다
