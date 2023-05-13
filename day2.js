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