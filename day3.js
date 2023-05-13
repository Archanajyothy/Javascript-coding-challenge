// Example1
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4]. 
function plusOne(digits) {
    let i = digits.length - 1;
    digits[i] += 1;
    while (i > 0 && digits[i] > 9) {
        digits[i] = 0;
        digits[i-1] += 1;
        i--;
    }
    
    if (digits[0] > 9) {
        digits[0] = 0;
        digits.unshift(1);
    }
    
    return digits;
}

let digits = [1,2,3];
console.log(plusOne(digits)); // Output: [1,2,4]
