function solution(arr) {
  let arr3 = [...arr];
  let arr2 = arr.sort((a, b) => b - a);
  console.log(arr3);
  console.log(arr2);
  let result = arr3.map((a, i) => {
    let index = arr2.indexOf(a);
    console.log(index);
    return index + 1;
  });
  console.log(result.join(" "));
}

solution([92, 92, 92, 100, 76]);
