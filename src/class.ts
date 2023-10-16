class personalDetailsClass{

    name:string;
    age:number;
   private country:string;
    
    constructor(n:string,a:number,c:string){
        this.name=n;
        this.age=a;
        this.country= c
    }

    play(){
        console.log(`${this.name} from ${this.country} `);
        
    }

   
}

const person1 =new personalDetailsClass("razu", 34, 'Bangladesh')

person1.name='shakib al hasan'
person1.country='palestine'