class User{
    static count=0;
    constructor(name,age){
        this.name=name;
        this.age=age;
        User.count+=1;
    }

    
}

u1=new User('abhi',33);
u2=new User('ani',22);
console.log(User.count)