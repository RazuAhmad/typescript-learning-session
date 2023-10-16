const totalCalculation:Function =(a:number,b:number, c:string='true'):number=>{
    return a+b
}

console.log(totalCalculation(34,23, false));


// Type Aliases::

// type stringOrNumber ={
//     name: string,
//     occupation:string,
//     salary:number
// }

type name =string
type occupation=string
type salary=string

type person9=string;

const b:person9="Razu";

interface individualInterface{
    name:string
    occupation:string
    salary:number
}

const personalDetails:individualInterface={
    name:'razu',
    occupation:'farmer',
    salary:230
}



type stringOrNum=string | number;
type userType= {name:string; age:number};

const userDetails =(id:stringOrNum, user:userType)=>{
console.log(id,user);

}

userDetails(349,{name:'abdur rahman', age:34})


// function signatures:::
let myFunc=(x:number, y:number)=>{
return x+y
}

let add : (x:number, y:number)=>number

add=(a:number,b:number)=>{
    return a+b
    
}

let calculation: (x:number, y:number, z:string)=> number

calculation=(a:number, b:number, c:string)=>{
if(c==='add'){
    return a+b
}
else{
    return a-b
}
}

calculation(23,34,'add')

let userDetailsNow: (id:number | string, userInfo:{
    name: string,
    age: number
}) =>number;


let myFunction: (a:string, b:number)=>number