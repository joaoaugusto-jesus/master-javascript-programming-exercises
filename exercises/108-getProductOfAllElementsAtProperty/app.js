function getProductOfAllElementsAtProperty(obj, key) {
  // your code here
  if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length < 1) return 0;

  let all = 1;
  for (let e of obj[key]) {
    all *= e;
  }

  return all;
}


let obj = {
  key: [1, 2, 3, 4]
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
