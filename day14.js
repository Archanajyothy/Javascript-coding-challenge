/* 
Example 1
Input: distance =[1,2,3,4],start = 0, destination = 1
Output: 1
Explanation: Distance between 0 and 1 is 1 or 9, minimum is 1.

Example 2
Input: distance =[1,2,3,4],start = 0, destination = 2
Output: 3
Explanation: Distance between 0 and 2 is 2 or 3, minimum is 3.

Example 3
Input: distance =[1,2,3,4],start = 0, destination = 3
Output: 4
Explanation: Distance between 0 and 3 is 6 or 4, minimum is 4.
*/ 

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