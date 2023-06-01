/* Input: word1 = ["ab","c"], word2 = ["a","bc"]
Input: word1 = ["a", "cd"], word2 = ["ab","c"]
Output: false */
function check(word1, word2){
    str1 = word1.join('')
    str2 = word2.join('')
    l1=str1.length
    l2=str2.length
    let flag = true
    if(l1 !== l2){
        console.log(false);
    }
    for (let i = 0; i < l1; i++) {
        if (str1[i] === str2[i]) {
            flag = true
        } else {
            flag = false
            break
        }
        
    }
    if (flag === true) {
       console.log('true'); 
    }else{
        console.log('false');
    }
}
//testcase1
// let word1 = ["a","cb"]
// let word2 = ["ab","c"]

//testcase2
let word1 = ["abc","d","defg"]
let word2 = ["abcddefg"]
check(word1,word2)