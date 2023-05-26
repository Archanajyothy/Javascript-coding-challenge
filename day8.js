//26th may 2023
function missingNum(num, k) {
    let arr = [];
    
    // Iterate over numbers from 1 to 20
    for (let i = 1; i <= 20; i++) {
      let found = false;
      
      // Check if the current number exists in the given array
      for (let j = 0; j < num.length; j++) {
        if (i === num[j]) {
          found = true;
          break;
        }
      }
      
      // If the number is not found, push it to the 'arr' array
      if (!found) {
        arr.push(i);
      }
    }
    
    // Print the kth position value if it exists
    if (k < arr.length) {
      console.log(arr[k-1]);
    } else {
      console.log("Invalid k value");
    }
  }
  
  let num = [2, 3, 4, 7, 11];
 //1 5 6 8 9 10
 //let num = [1,2,6,7,10]
 //3 4 5 8 9
  let k = 5;
  missingNum(num, k);
  
