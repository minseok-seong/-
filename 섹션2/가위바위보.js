function solution(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === 1) {
      if (arr2[i] === 1) {
        result.push("D");
      } else if (arr2[i] === 2) {
        result.push("B");
      } else if (arr2[i] === 3) {
        result.push("A");
      }
    } else if (arr1[i] === 2) {
      if (arr2[i] === 1) {
        result.push("A");
      } else if (arr2[i] === 2) {
        result.push("D");
      } else if (arr2[i] === 3) {
        result.push("B");
      }
    } else if (arr1[i] === 3) {
      if (arr2[i] === 1) {
        result.push("B");
      } else if (arr2[i] === 2) {
        result.push("A");
      } else if (arr2[i] === 3) {
        result.push("D");
      }
    }
  }
  console.log(result.join(" "));
}

solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]);

function solution(a, b) {
  let answer = "";
  for (let i = 0; i < a.length; i++) {
    //누가 이기는지에 집중해라 무승부 케이스는 단하나 a가 이기는 경우만 체크하면 나머진 else 로 처리
    if (a[i] === b[i]) answer += "D ";
    else if (a[i] === 1 && b[i] === 3) answer += "A ";
    else if (a[i] === 2 && b[i] === 1) answer += "A ";
    else if (a[i] === 3 && b[i] === 2) answer += "A ";
    else answer += "B ";
  }

  return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
