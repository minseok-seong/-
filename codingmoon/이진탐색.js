//리스트에서 탐색범위를 절반씩 좁혀가며 특정한 값을 찾을때 사용한다
//속도가 빠름
//low mid high 포인터를 활용한다

//타겟이 중간값보다 작으면 중간값 기준으로 좌측 아이템 탐색
//타겟이 중간보다 크면 우측
//위의 방법 반복

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = arr[mid];

    if (guess === target) {
      return mid; // 찾았을 경우 인덱스 반환
    } else if (guess < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1; // 찾지 못한 경우 -1 반환
}
