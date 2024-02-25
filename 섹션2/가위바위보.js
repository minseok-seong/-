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
