//Example 1:
//Input : s = "abcd" , t = "abcde"
//Output : "e"
//Explanation : 'e' is the letter that was added.
//Exampple 2:
// Input : s = "", t = "y"
// Output : "y"
let s = "abcd"
let t = "abcde"
for(i=0;i<t.length;i++){
    if(s[i]!==t[i] && t.length<=s.length){
      console.log(s[i]); 
    }else{
        if(i===s.length)
        console.log(t[i]);
    }
}