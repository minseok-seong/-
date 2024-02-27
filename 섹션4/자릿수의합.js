function solution(arr) {
  let hap = 0;
  let arr2 = [];
  arr = arr.map((a) => a + "");
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      hap += +arr[i][j];
    }
    arr2.push(hap);
    hap = 0;
  }

  let index1 = 0;
  let index2 = 0;
  console.log(arr2);
  index1 = arr2.indexOf(Math.max(...arr2));
  index2 = arr2.lastIndexOf(Math.max(...arr2));
  console.log(index1, index2);
  index1 === index2
    ? console.log(+arr[index1])
    : console.log(Math.max(...[+arr[index1], +arr[index2]]));
}

solution([128, 460, 603, 40, 521, 137, 123]);
