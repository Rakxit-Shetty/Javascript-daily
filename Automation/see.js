const { exec } = require('child_process');

// // // Run the git log --oneline command
// // // exec('git log --oneline', (error, stdout, stderr) => {
// // //   if (error) {
// // //     console.error(`Error executing command: ${error.message}`);
// // //     return;
// // //   }

// // //   if (stderr) {
// // //     console.error(`Command error: ${stderr}`);
// // //     return;
// // //   }

// // //   // Log the output of the git log command
// // //   console.log('Git log output:');
// // //   console.log(stdout);
// // // });
// // //git commit --amend --date="2023-05-10 15:15:00"

// // // for(let i=0;i<10;i++){
// // //     const currentDate = new Date("2023-08-01");
// // //     console.log(currentDate);
// // //     currentDate.setDate(currentDate.getDate() + i);

// // // console.log(new Date()+i);
// // // exec(`touch day${i}.js`, (error, stdout, stderr) => {});
// // // exec(`git add .`, (error, stdout, stderr) => {});
// // // exec(`git add .`, (error, stdout, stderr) => {});

// // // }

// //   // Example usage
// //   const startDate = "2023-08-01";
// //   const tenDaysList = listTenDaysAfterThisDate(startDate);
  
// //   // Display the result
// //   tenDaysList.forEach((date,i) => {
// //     let [day,time]=date.split("T");
// //     //exec(`rm day${i}.js`, (error, stdout, stderr) => {});
// //     // git commit --amend --date="2023-05-10 15:15:00"
// //     // console.log(`git commit --amend --date=${day} ${time.slice(0, -1)}`);

// //     exec(`touch day${i}.js`, (error, stdout, stderr) => {});
// //      exec(`git add .`, (error, stdout, stderr) => {});
// //     //  exec(`git commit -m no${i}`, (error, stdout, stderr) => {});
// //      exec(`git commit --amend --date=${day} ${time.slice(0, -1)}`, (error, stdout, stderr) => {});
    
// //   });

// const getLast10Commits = () => {
//     const gitCommand = 'git log --format=%H -n 10';
  
//     return new Promise((resolve, reject) => {

//       exec(gitCommand, (error, stdout, stderr) => {
//         if (error) {
//           reject(`Error getting commit hashes: ${error.message}`);
//           return;
//         }
  
//         if (stderr) {
//           reject(`Command error: ${stderr}`);
//           return;
//         }
  
//         const commitHashes = stdout.trim().split('\n');
//          resolve(commitHashes);
//         // return commitHashes
//       });
//     });
//   };


//   console.log(getLast10Commits())

// // Function to amend the date of the last commit
// // const amendCommitDate = (commitHash, newDate) => {
// //     const gitCommand = `git commit --amend ${commitHash} --date="${newDate}" --no-edit`;
  
// //     exec(gitCommand, (error, stdout, stderr) => {
// //       if (error) {
// //         console.error(`Error amending commit: ${error.message}`);
// //         return;
// //       }
  
// //       if (stderr) {
// //         console.error(`Command error: ${stderr}`);
// //         return;
// //       }
  
// //       console.log(`Commit ${commitHash} amended successfully with date ${newDate}.`);
// //     });
// //   };
  
// //   // Example usage
// //   const baseDate = new Date("2023-08-01T15:15:00");
  
// //   getLast10Commits()
// //     .then(commitHashes => {
// //       // Iterate through the last 10 commits and amend the date
// //       commitHashes.forEach((commitHash, index) => {
// //         const newDate = new Date(baseDate.getTime() + index * 1000); // Increment seconds for each commit
// //         amendCommitDate(commitHash, newDate.toISOString());
// //       });
// //     })
// //     .catch(error => console.error(error));
  



function list108DaysAfterThisDate(startDate) {
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
  
   let listt=list108DaysAfterThisDate("2023-08-01");

// Function to get the last 10 commit hashes
const getLast108Commits = () => {
    const gitCommand = 'git log --format=%H -n 107';
  
    return new Promise((resolve, reject) => {
      exec(gitCommand, (error, stdout, stderr) => {
        if (error) {
          reject(`Error getting commit hashes: ${error.message}`);
          return;
        }
  
        if (stderr) {
          reject(`Command error: ${stderr}`);
          return;
        }
  
        const commitHashes = stdout.trim().split('\n');
        resolve(commitHashes);
      });
    });
  };
  
  // Example usage
  getLast108Commits()
    .then(commitHashes => {
        commitHashes.forEach((ele,i)=>{
            let [day,time]=listt[i].split("T");
             const gitCommand = `git commit --amend ${ele} --date="${day} ${time.slice(0, -1)}" `;
              exec(gitCommand, (error, stdout, stderr) => {
                console.log(`Commit ${ele} amended successfully with date ${listt[i]}.`);
              });

            // console.log(gitCommand)
        })
    

    })
    .catch(error => console.error(error));