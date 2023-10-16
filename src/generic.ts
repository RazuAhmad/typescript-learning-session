// generics practice

const addID =<T extends object>(obj: T)=>{
    let id=Math.floor(Math.random()*100);
    return {...obj, id}
}

let user= addID({name:"mashldjk"})


// another 

interface APIResponse<T> {
    status:string,
    type:string,
    data:T
}

const response1:APIResponse<object>={
    status:'ok',
    type:'good',
    data:{name:'razu'}
}
