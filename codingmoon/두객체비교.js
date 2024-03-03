//객체는 참조타입이라 직접 비교불가
const obj1 = {
  a: "a",
  b: 1,
  c: ["a", "b", "c"],
  d: {
    e: null,
    f: -1,
  },
};

const obj2 = {
  a: "a",
  b: 1,
  c: ["a", "b", "c"],
  d: {
    e: null,
    f: -1,
  },
};

function tets(obj1, obj2) {
  let a = JSON.stringify(obj1);
  let b = JSON.stringify(obj2);

  return a.split("").sort().join("") === b.split("").sort().join("");
}
