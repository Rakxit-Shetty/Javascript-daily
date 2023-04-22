//Cannot change let to var illegal shadow

// let a=10;
// {
//     var a=10;
// }


//clouser optimization but didnt undertand

function find1(){
    
    let a=[];
    for(let i=0;i<100;i++){
        a[i]=i*i;
    }
    return(function(index){
    console.log(a[index]);
    });
}

const x=find1();
console.time("start2")
x(5);
 console.timeEnd("start2");
 
 console.time("start3")
x(50);
 console.timeEnd("start3");
 console.time("start4")
x(50);
 console.timeEnd("start4");