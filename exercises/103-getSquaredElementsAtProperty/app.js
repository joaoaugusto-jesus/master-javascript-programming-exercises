function getSquaredElementsAtProperty(obj, key) {
    // your code here
    if(!obj[key] || !Array.isArray(obj[key] || !obj.hasownproperty(key))){
      return []
    }

    const squareArray = obj[key].map((elememt) => elememt * elememt )
    return squareArray
}

let obj = {
  key: [2, 1, 5]
};
let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
