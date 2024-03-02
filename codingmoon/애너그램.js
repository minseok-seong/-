const stringA = "listen1";
const stringB = "silent1";

// #1 split(), sort(), and join()
// function isAnagram(strA, strB) {
//   if (strA.length !== strB.length) {
//     return false;
//   }
//   return strA.split("").sort().join() === strB.split("").sort().join();
// }

// #2 map = {}
function isAnagram(strA, strB) {
  if (strA.length !== strB.length) {
    return false;
  }
  const hashMap = {};
  // {l:1, i:1, s:1 ...}
  for (const char of strA) {
    hashMap[char] = hashMap[char] ? hashMap[char] + 1 : 1;
  }

  for (const char of strB) {
    if (!hashMap[char]) {
      return false;
    }
    hashMap[char]--;
  }
  return true;
}

// #3 Map()
// function isAnagram (strA, strB) {
//   if (strA.length !== strB.length) return false;

//   const map = new Map();

//   for (let char of strA) {
//     map.set(char, map.get(char) + 1 || 1);
//   }

//   for (let char of strB) {
//     if (!map.get(char)) return false;
//     map.set(char, map.get(char) - 1);
//   }

//   return true;
// };
