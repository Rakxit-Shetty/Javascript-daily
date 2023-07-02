
let count=(n)=>{
    let i=n;
  
    return ()=>i++;
}
let countt=count(10)

console.log("Welcome to Programiz!",countt());
console.log("Welcome to Programiz!",countt());
console.log("Welcome to Programiz!",countt());
console.log("Welcome to Programiz!",countt());

//closer