function compute(num) {
    let str = num.toString();
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      let digit = parseInt(str[i]);
      if (digit !== 0 && num % digit === 0) {
        count++;
      }
    }
  
    console.log(count);
  }
  
  compute(7);
  