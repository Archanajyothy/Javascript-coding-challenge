// Input : nums = [1,1,2,2,2,3]
// output: [3,1,1,2,2,2]
// Explanation : '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.
// Please solve the problem using javascript.

function expandArray(nums) {
    const freqMap = {};
  
    // Count the frequency of each number
    for (let num of nums) {
      freqMap[num] = (freqMap[num] || 0) + 1;
    }
  
    // Sort the numbers based on their frequency in ascending order
    const sortedNums = nums.sort((a, b) => freqMap[a] - freqMap[b]);
  
    const expandedArray = [];
  
    // Expand the array based on frequency
    for (let num of sortedNums) {
      if (!expandedArray.includes(num)) {
        for (let i = 0; i < freqMap[num]; i++) {
          expandedArray.push(num);
        }
      }
    }
  
    return expandedArray;
  }
  
  // Test cases
  const nums1 = [1, 1, 1, 2, 2, 2, 3];
  const expanded1 = expandArray(nums1);
  console.log(expanded1); // Output: [3, 2, 2, 1, 1, 1]
  
  const nums2 = [2, 3, 1, 3, 2];
  const expanded2 = expandArray(nums2);
  console.log(expanded2); // Output: [1, 2, 2, 3, 3]