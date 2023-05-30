/*Input :nums = [1,2,3,4,5] , k=3
Output: 18
Explanation: We need to choose exactly 3 elements from nums to maximize the sum.
For the first iteration, we choose 5. Then sum is 5 and nums = [1,2,3,4,6].
For the second iteration, we choose 6. Then sum is 5 + 6 and nums = [1,2,3,4,7].
For the third iteration, we choose 7. Then sum is 5 + 6+ 7 = 18 and 
nums =[1,2,3,4,8].
So we will return 18.
It can be proven, that 18 is the maximum answer that we can achieve.  */
function maxScore(arr,k){
    let sum = 0
    let n = 0
    arr.sort()
    while(k>0){
        let n = arr.pop();
        //console.log(n);
        arr.push(n+1)
        sum=sum+n
        k--
    }
    console.log(sum);
}
let arr = [1,2,3,4,5]
let k = 3
maxScore(arr,k)