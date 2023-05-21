//delete key word only used when we want to delete property from an obj not n a local var
let obj1 = {
  name: "sam",
  age: 21,
};
delete obj1.age; // will work and output is onnlt name
//////////////////////////////

let a = 5;
delete a;
console.log(a); // 5
//doesnt work will print and 5

/////////////////////////////
//dynamic key value to obj
let key = "age";
let value = 12;
let Obj2 = {
  [key]: value,
};
console.log(Obj2); // printed { age:12 }
/////////////////////////
//TWo key with the same name
const sameKey = {
  a: "one",
  b: "two",
  a: "three",
};
console.log("Same key", sameKey); // A is overriden and printed { a:"three",b:"two"}

////////////////////////////////////////
//type og Object over lap
let a1 = {};
let b1 = { key: "b" };
let c1 = { key: "c" };

a1[b1] = 400; //a1['object object']=400;

a1[c1] = 800; //a1['object object']=800;

console.log("a1 of b1", a1[b1]); // 800
////////////////////////////////////////////
//Spread oprater
let so = "12345";
console.log([...so]); //[ '1', '2', '3', '4', '5' ]

///////////////////////////////////////////
//this key word in object
let thisObj = {
  rad: 10,
  sand: 20,
  radDouble() {
    return { key: this.rad * 2 };
  },
  radThirble: () => {
    return this.rad * 1;
  },
};
console.log(thisObj.radThirble()); //NaN
console.log(thisObj.radDouble()); //{key:20}
console.log(thisObj); //{ rad: 10, radDouble: ,[Function: radDouble], radThirble: [Function: radThirble] }
/////////////////////////////////////////////////
// destruct with name
const { rad: randomint, sand: sad } = thisObj;
console.log(randomint); //10
console.log(sad); //20

//////////////////////////////////////
// nestd obj restructing

let x = {
  ageis: 10,
  name: {
    first: "rakshith",
    last: "shetty",
  },
  edu: "MCA",
};
const {ageis,name:{first, last},edu}=x;
console.log(ageis,first, last,edu); // 10 rakshith shetty MCA

//////////////////////////////
//Objet refrencing IMP
let myobj={
    name:"Riya",
    age:10,
}
let Scpy=myobj; //Shallow Copy
let Dcpy={...myobj}; //Deep copy
myobj.name="";
console.log(Scpy,"shpllow cpy");
console.log(Dcpy,"Deep cpy");

//Note
//In referencing when yu modify the whole array the b will be a deep copy
// /only if you touch the inner specific ref it will be a shollow cpy

//////////////////////////////////
//function is modifying orignal obj becouse of ref
function n(person){
    person.name="SAM";
    person={
        name:"Riya",
        age:10,
        
    }
    return person;
}
const OriginalName={name:"Ram", age:10};

const returnedName=n(OriginalName);


console.log(returnedName); //{ name: 'Riya', age: 10 }


console.log(OriginalName);//{ name: 'SAM', age: 10 }
///////////////////////////////////
// make deep copy
let objmine={name:"sam"};
// 1.
let objClone1=Object.assign({},objmine);
// 2.
let objClone2={ ...objmine };
// 3.
let objClone3=JSON.parse(JSON.stringify(objmine))


/////////////Problem Club same id and sum its needed val

let a11=[{
  id:2,
  sal:20,
  name:"Sam"
},{
  id:2,
  sal:100,
  name:"Sam"
},{
  id:3,
  name:"Ram",
  sal:200,
}];

let res=a11.reduce((acc, obj) => {
  if (acc[obj.id]) {
    acc[obj.id].sal += obj.sal;
  } else {
    acc[obj.id] = { ...obj };
  }
  return acc;
}, {})
console.log("see",Object.values(res))
///
// MAP REDUCE help
//get the count 2
let ac = [[1, 1, 1], [1, 1, 1, 2], [2, 1, 1, 2], [1, 1, 2], [2, 2, 2], [2]];

let countTwo = ac.map(subarray => {
  return subarray.reduce((count, num) => {
    return count + (num === 2 ? 1 : 0);
  }, 0);
});

console.log(countTwo);//[0, 1, 2, 1, 3, 1]

//get sub array 2
let a2 = [[1, 1, 1], [1, 1, 1, 2], [2, 1, 1, 2], [1, 1, 2], [2, 2, 2], [2]];

let countTwo2 = a2.map(subarray => {
  return subarray.reduce((result, num) => {
    if (num === 2) {
      result.push(num);
    }
    return result;
  }, []);
});

console.log(countTwo2);// [[], [2], [2, 2], [2], [2, 2, 2], [2]]
