/* 
Example 1
Input: s = "anagram", t = "nagaram"
Output: true

Example 2
Input: s = "rat", t = "cat"
Output: false
*/
function anagram(s, t){
    arr = []
    for(let i=0;i<s.length;i++){
        if (s.length !== t.length) {
            console.log('false');
            break;
        }
        for (let j = 0; j < t.length; j++) {
            if(s[i] === t[j]){
                arr.push(s[i])
                t[j]='*'
                break
            }
            
        }
    }
    //console.log(arr.join(''));
    if(arr.join('') === s ){
        console.log('true');
    }else{
        console.log('false');
    }
}
s = 'anagram'
t = 'nagaram'
// s = 'rat'
// t = 'cat'
anagram(s,t)