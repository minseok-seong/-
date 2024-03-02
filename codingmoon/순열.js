//순열 그 확률과 통계에서의 순열이다
//트리구조를 바탕으로 이해하면 좋다  백트래킹 , 반복,선택, 탐색, 선택취소
// 코드구현

function permutate(arr) {
  const result = [];

  //DFS
  const dfs = (i, arr) => {
    // base condition
    if (i === arr.length) {
      return result.push([...arr]);
    }

    for (let j = i; j < arr.length; j++) {
      //swap
      [arr[i], arr[j]] = [arr[j], arr[i]];
      //dfs
      dfs(i + 1, arr);
      //swap back
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  };
  dfs(0, arr);
  return result;
}

console.log(permutate(["a", "b", "c"]));
