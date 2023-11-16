const { exec } = require('child_process');

// Run the git log --oneline command
// exec('git log --oneline', (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Error executing command: ${error.message}`);
//     return;
//   }

//   if (stderr) {
//     console.error(`Command error: ${stderr}`);
//     return;
//   }

//   // Log the output of the git log command
//   console.log('Git log output:');
//   console.log(stdout);
// });
//git commit --amend --date="2023-05-10 15:15:00"

// for(let i=0;i<10;i++){
//     const currentDate = new Date("2023-08-01");
//     console.log(currentDate);
//     currentDate.setDate(currentDate.getDate() + i);

// console.log(new Date()+i);
// exec(`touch day${i}.js`, (error, stdout, stderr) => {});
// exec(`git add .`, (error, stdout, stderr) => {});
// exec(`git add .`, (error, stdout, stderr) => {});

// }


function listTenDaysAfterThisDate(startDate) {
    const result = [];
  
    // Create a Date object for the provided start date
    const currentDate = new Date(startDate);
  
    // Loop to generate ten consecutive days
    for (let i = 0; i < 108; i++) {
      // Add the current date to the result array
      result.push(currentDate.toISOString());
  
      // Move to the next day
      currentDate.setDate(currentDate.getDate() + 1);
    }
  
    return result;
  }
  
  // Example usage
  const startDate = "2023-08-01";
  const tenDaysList = listTenDaysAfterThisDate(startDate);
  
  // Display the result
  tenDaysList.forEach((date,i) => {
    let [day,time]=date.split("T");
    // exec(`rm day${i}.js`, (error, stdout, stderr) => {});
    // git commit --amend --date="2023-05-10 15:15:00"
    // console.log(`git commit --amend --date=${day} ${time.slice(0, -1)}`);

    exec(`touch day${i}.js`, (error, stdout, stderr) => {});
     exec(`git add .`, (error, stdout, stderr) => {});
     exec(`git commit -m no${i}`, (error, stdout, stderr) => {});
     exec(`git commit --amend --date=${day} ${time.slice(0, -1)}`, (error, stdout, stderr) => {});
    
  });