/*
Example 1
Input: arr = [10,2,5,3]
Output: true
Explanation: For i = 0 and j =2,
arr[i] == 10 == 2 * 5 == 2 * arr[j]

Example 2
Input: arr = [3,1,7,11]
Output: false
Explanation: There is no i and j that satisfy the conditions.
*/

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