// Read the input from standard input
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  // Print the input number
  console.log(line);
});

//////////////////////////////////////scope

// Read the input from standard input
const readline = require('readline');

const rl1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let num=[];

rl1.on('line', (line) => {
  // Print the input number
  num.push(line);
 
});


rl1.on('close', () => {
  
  console.log(Number(num[0])+Number(num[1]));
});
// console.log(num);
//////////////////////////////////

// Read the input from standard input
const readline = require('readline');

const rl3 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let array = [];

let count = 0;
let numElements = 0;

rl3.on('line', (line) => {
  if (count === 0) {
    // Read the number of elements
    numElements = parseInt(line);
    count++;
  } else {
    // Read the array elements
    array.push(line);
    count++;

    // If all elements have been read
    if (count - 1 === numElements) {
      // Process the array here
      console.log('Array:', array);

      // Close the readline interface
      rl3.close();
    }
  }
});
