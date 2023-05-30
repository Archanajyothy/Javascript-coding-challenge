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