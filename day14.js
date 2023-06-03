function minDistance(arr,start,dest){
    let i = 0
    let j = 4
    let count1=0 
    let count2=0
    while(i < dest){
        //console.log('hi');
        i++
        count1 +=i
         
    }
    while(j > dest){
        count2 +=j
        j--
        
    }
    if(count1<count2){
        console.log('minimum is ',count1);
    }else{
        console.log('minimum is ',count2);
    }
}

arr = [1,2,3,4]
start= 0
dest = 3
minDistance(arr,start,dest)