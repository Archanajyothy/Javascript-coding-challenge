function smallest(arr1,arr2){
    let arr3 = []
    for(let i =0;i<arr1.length; i++){
        for (let j = 0; j < arr2.length; j++) {
            if(arr1[i]===arr2[j]){
                arr3.push(arr1[i])
            }  
        }
    }
    arr3.sort()
    if(arr3.length === 0){
        arr1.sort()
        arr2.sort()
        console.log(arr1[0],arr2[0]);
    }else{
        console.log(arr3[0]);
    }
}
// let arr1 = [4,1,3]
// let arr2 = [5,7]
arr1=[3,5,2,6]
arr2=[3,1,7]
smallest(arr1,arr2)
