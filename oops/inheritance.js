class Parent{
    static count=0;
    constructor(name,age,email,phone){
        this.name=name;
        this.age=age;
        this.phone=phone;
        this.email=email;
        Parent.count+=1;
    }

    getParentDetails(){
        console.log(`details name:  ${this.name} age: ${this.age}, phone: ${this.phone} , email:  ${this.email} `);
    }
}

class Child extends Parent{
    constructor(name,age,email,phone,sex){
        super(name,age,email,phone);
        this.sex=sex;
    }
    getChildDetails(){
        console.log(`details name:  ${this.name} age: ${this.age}, phone: ${this.phone} , email:  ${this.email} `);
    }
}

let p1=new Parent('parent',45,'parent@gmail.com',12345);
let c1=new Parent('child1',5,'child@gmail.com',12);


// p1.getParentDetails();
// c1.getParentDetails();
//p1.getChildDetails();//not work
console.log(Parent.count)