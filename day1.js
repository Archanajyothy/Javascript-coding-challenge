//Number of segments in a string

let str = "Hello, my name is john"
function countSegments(s){
    let ans = 0
    for (let i = 0; i < s.length; i++) {
        if(s.charAt(i)!==' '&&(i===0 || s.charAt(i-1)===' ')){
            ++ans;
        }
    
    }
    return ans;
}
console.log(countSegments(str));
