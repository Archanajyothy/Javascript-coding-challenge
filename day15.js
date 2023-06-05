function numExist(arr){
    let flag = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i]===arr[j]*2) {
                console.log('true');
                flag=1
                break
            }
            if (flag===1) {
                break
            }
            
        }
        if (flag === 0 && i+1 === arr.length) {
                console.log('false');
        }
        if (flag===1) {
                break
        }
        
    }
}
arr = [10,2,5,3]
//arr=[3,1,7,11]
numExist(arr)