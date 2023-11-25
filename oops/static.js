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



//In JavaScript, the static keyword is used in a class to define a static method or a static property. Static methods and properties belong to the class itself rather than instances of the class. You can call a static method or access a static property without creating an instance of the class.