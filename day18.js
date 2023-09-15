let arr = ['a','c','b','a','e','f','b','c','a','g','f','h','g','d'];
let output = {};

for (let i = 0; i < arr.length; i++) {
  let element = arr[i];
  if (output[element]) {
    output[element]++;
  } else {
    output[element] = 1;
  }
}

// Extract the keys, sort them, and create a new object
let sortedKeys = Object.keys(output).sort();
let sortedOutput = {};

for (let i = 0; i < sortedKeys.length; i++) {
  let key = sortedKeys[i];
  sortedOutput[key] = output[key];
}

console.log(sortedOutput);
