interface fighterDetailsInterface{
name:string,
age:number,
country:string
}

const fighter1:fighterDetailsInterface={
    name:'abu abdullah',
    age:35,
    country:'Bangladesh'
}

function drawAFightName(details:fighterDetailsInterface) {
    let name=details.name;
    let age=details.age
}

drawAFightName({name:'razu',age:32,country:'syria'})