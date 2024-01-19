// Write your function here
function getElementsLessThan100AtProperty(obj, key) {
    if(!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) {
        return []
        }
        let arr = obj[key]
let newArr = []

arr.forEach(element => {
    if (element < 100){
    newArr.push(element)
  }
})
return newArr
}
