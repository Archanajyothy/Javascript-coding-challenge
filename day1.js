//Number of segments in a string
/* Example 1:
   Input: s = "Hello, my name is john"
   Output: 5
   Explanation: The five segments are
   ["Hello,","my","name","is","John"] 

   Example 2:
   Input s = "Hello"
   Output: 1
*/

let s = "Hello, my name is john"
function countSegments(s){
    let ans = 0
    for (let i = 0; i < s.length; i++) {
        if(s.charAt(i)!==' '&&(i===0 || s.charAt(i-1)===' ')){
            ++ans;
        }
    
    }
    return ans;
}
console.log(countSegments(s));
