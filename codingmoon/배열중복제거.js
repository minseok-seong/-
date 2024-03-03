const dupArr = [1, 2, 3, 1, 2];

const set = new Set(dupArr); //set은 오브젝트

const uniqueArr = [...set];

const dupArr1 = [1, 2, 3, 1, 2];

const uniqueArr1 = dupArr.filter((element, index) => {
  return dupArr.indexOf(element) === index;
}); //인덱스는 처음 발견된 인덱스를 리턴한다

const dupArr2 = [1, 2, 3, 1, 2];

let uniqueArr2 = [];
dupArr2.forEach((element) => {
  if (!uniqueArr2.includes(element)) {
    uniqueArr2.push(element);
  }
});

function solution(arr) {
  const obj = {};
  const result = [];
  for (let a of arr) {
    if (!obj[a]) {
      result.push(a);
    }
    obj[a] = a;
  }

  return result;
} //객체를 활용한 중복제거, 객체에 넣는데 없으면 넣고 있으면 안넣는다
