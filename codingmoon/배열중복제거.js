const dupArr = [1, 2, 3, 1, 2];

const set = new Set(dupArr);

const uniqueArr = [...set];

const dupArr1 = [1, 2, 3, 1, 2];

const uniqueArr1 = dupArr.filter((element, index) => {
  return dupArr.indexOf(element) === index;
});

const dupArr2 = [1, 2, 3, 1, 2];

let uniqueArr2 = [];
dupArr2.forEach((element) => {
  if (!uniqueArr2.includes(element)) {
    uniqueArr2.push(element);
  }
});
