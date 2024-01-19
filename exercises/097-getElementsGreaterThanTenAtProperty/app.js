
function getElementsGreaterThan10AtProperty(obj, key) {
    if(!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) {
        return []
    }

    let arr = obj[key]
    let newArr = []

    arr.forEach(element => {
        if (element > 10) {
            newArr.push(element)
        }
    })
    return newArr;
}