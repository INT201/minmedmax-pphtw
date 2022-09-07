const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
//     if (n1 < n2 && n1 < n3) {
//         minNum = n1
//         if(n2 < n3) midNum = n2, maxNum = n3
//         else midNum = n3, maxNum = n2
//     }
//     else if (n2 < n1 && n2 < n3) {
//         minNum = n2
//         if(n1 < n3) midNum = n1, maxNum = n3
//         else midNum = n3, maxNum = n1
//     }
//     else if (n3 < n1 && n3 < n2) {
//         minNum = n3
//         if (n2 < n1) midNum = n2, maxNum = n1
//         else midNum = n1, maxNum = n2
//     }

//   let obj = {min: minNum, mid: midNum, max: maxNum}
//     return obj
    let array = [n1, n2, n3]
    let x
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if (array[i] >= array[j]) {
                x = array[i]
                array[i] = array[j]
                array[j] = x
            }
        }
    } 
    return {min: array[0], mid: array[1], max: array[2]}
}
module.exports = minMedMax
