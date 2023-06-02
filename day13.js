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