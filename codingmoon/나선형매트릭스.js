//나선형 매트릭스
//left =0,right는 matrix의 0번째 배열의 길이

// top=0, bottom은 matrix의 길이로 설정했다.

// 당연한 거지만 그래도 while문으로 left<=right, top<=bottom를 조건으로 만들어준다.

// 1->2->3으로 향할 때는 빈 배열인 result에 matrix[top][i]를 푸쉬해준다. 그리고 top이 하나씩 증가한다.

// 3->6->9로 향할 때는 matrix[i][right]를 푸쉬해준다. 그리고 right가 하나씩 감소한다.

// 9->8->7과 7->4->5는 if문으로 left<=right, top<=bottom 조건을 추가해주고 push하고 bottom과 left를 감소하고 증가시킨다.
const t1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const t2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

function Matrix(matrix) {
  const result = [];

  let left = 0;
  let right = matrix[0].length - 1;
  let top = 0;
  let bottom = matrix.length - 1;

  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }
  return result;
}

console.log(Matrix(t1));
console.log(Matrix(t2));
