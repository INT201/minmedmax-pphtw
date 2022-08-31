const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
    if (n1 < n2 && n1 < n3) {
        minNum = n1
        if(n2 < n3) midNum = n2, maxNum = n3
    }
    else if (n2 < n1 && n2 < n3) {
        minNum = n2
        if(n1 < n3) midNum = n1, maxNum = n3
    }
    else if (n3 < n1 && n3 < n2) {
        minNum = n3
        if (n2 < n1) midNum = n2, maxNum = n1
    }


  let obj = {min: minNum, mid: midNum, max: maxNum}
    return obj
}
module.exports = minMedMax
