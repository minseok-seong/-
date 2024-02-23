function solutions(arr) {
  let c, d;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let hap = arr.reduce((a, b, index) => {
        if (index === i || index === j) {
          return a;
        } else {
          return a + b;
        }
      }, 0);
      if (hap === 100) {
        c = i;
        d = j;
      }
      break;
    }
  }
  console.log(c, d);
  let result = arr.filter((a, i) => i !== c && i !== d);
  console.log(result);
}
solutions([20, 7, 23, 19, 10, 15, 25, 8, 13]);
