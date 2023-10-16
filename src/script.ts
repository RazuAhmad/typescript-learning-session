let object1: {
    name:string,
    age:number,
    country:string
}

object1={
    name:'razu',
    age:32,
    country:'bangladesh'
}

console.log(object1);

const array1=['apple', true, {}];

array1.push({
    name:'hellow'
})
console.log(array1);


// Type allias
type person ={
   name:string;
    age:number;
}

// Interface
interface IPerson{
name:string;
age:number;
isCaptain:boolean;
country?: string
}

const person4:IPerson={
    name:'abdur rahman',
    age:434,
    isCaptain:true
}

let person3:string ='razu';

// Tuple type:: specifying type of the every single index::
let ourTuple:[string, number, boolean];
ourTuple =['ab',3, true]

let a:(string | number | boolean) []=['razu', true,33];
a.push('sumit')

console.log(a);


// Object type
let newAray:object;

newAray=[
    'hellow',32, true
]


function sumTotal(a:number,b:number):number{
return a+b
}

sumTotal(34,554)

// Dynamic type::

