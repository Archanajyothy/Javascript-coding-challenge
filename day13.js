/*
Example 1

Input: n = 4, time = 5
Output: 2
Explanation: People pass the pillow in the following way:
1 -> 2 -> 3 -> 4 -> 3 -> 2.
After five seconds, the pillow is given to the 2nd person.  

Example 2

Input: n = 3, time =2 
Output: 3
Explanation: People pass the pillow in the following way:
1 -> 2 -> 3.
After two seconds, the pillow is given to the 3rd person. 
*/


function pass(n,t){
    let arr = [], num =0
    if(t<n){
        count = n
    }else{
        count = t
    }
    for(let i = 0; i<count+1;i++){
        if (i>=n && arr[i]!=0) {
            num = arr[i-1]
            arr.push(num-1)
            //console.log(arr[i]);
        } else {
            arr.push(i+1)
            //console.log(arr[i]);
        }
    }
    console.log(arr[t]);
}
let n = 4, t = 5
//let n = 3 , t = 2
pass(n,t)