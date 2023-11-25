// // class Employee{

// //     constructor(hr,sal){
// //         this.hr=hr;//6
// //         this.sal=sal;//400
// //     }

// //     getDetails(){
       
// //         return this.addWork();


// //     }

// //     addWork(){
// //         if(this.hr>6){
// //             return this.addSalary()+5
// //         }
// //         else{
// //             return this.addSalary();
// //         }
// //     }
// //     addSalary(){
// //         if(this.sal<500){
// //             return this.sal+10
// //         }
// //         else{
// //             return this.sal;
// //         }
// //     }
// // }

// // let e1=new Employee(6,400);
// // console.log(e1.getDetails())

// // class Employee{


// //     getDetails(sal,hr){
       
// //       let sal1=this.addSalary(sal);
// //       let sal2=this.addWork(sal1,hr);
// //       return sal2;


// //     }

// //     addWork(sal,hr){
// //         if(hr>6){
// //             return sal+5
// //         }
// //         else{
// //             return sal;
// //         }
// //     }
// //     addSalary(sal){
// //         if(sal<500){
// //             return sal+10
// //         }
// //         else{
// //             return sal;
// //         }
// //     }
// // }

// // let e1=new Employee();
// // console.log(e1.getDetails(500,6));

// //

// // encapsulation:--->

// class BankAccount{

//     #acNo;
//     #bal=0;

//     constructor(){
//         //using for innitialization: optional
//         // this.#acNo= null;
//         // this.#bal=0
        

//     }

//     //for getting account balance:-->
//     getDetails(){
      
//         console.log('Account No: ',this.#acNo, 'Balance: ',this.#bal);


//     }


//     setAccAndBal(acno,val){
//         if(typeof(val)==="number"){
//             // console.log(typeof(val))

//             this.#acNo=acno;
//             this.#bal+=val;

//             console.log('success!')
//         }
//         else{
//             console.log('pls enter valid input for value')
//         }


//     }

//     deductBal(bal){
//         if(typeof(bal)==='number' && this.#bal >= bal){
//             this.#bal-=bal;

//             console.log(`rs: ${bal} is deducted from your account no ${this.#acNo}, current bal: ${this.#bal} `)

//         }
//         else{
//             console.log('pls enter a valid input!')
//         }
//     }


// }

// let ac1=new BankAccount();
// let ac2=new BankAccount();

// //set acc/bal:
// ac1.setAccAndBal('ac1/12345',500);
// ac1.setAccAndBal('ac1/12345',1500);
// ac1.deductBal(500);

// // ac2.setAccAndBal('ac2/12345',1500);
// ac1.getDetails()


// // console.log(ac1.getBal('ac1/12345'))







//encapsulation practice:--->

// class Bank{

//     #accno;
//     #bal=0;
//     constructor(){
      
//     }


//     getDetails(){
//         console.log(this.#bal)
//     }

//     credit(val){
//         this.#bal+=val;
//         console.log('total=',this.#bal)
//     }

// }
// let ac1=new Bank();
// // ac1.getDetails()
// // console.log(ac1.#bal)
// ac1.credit(100)



//abstruction:--->
//Creating a constructor function  
// function Vehicle()  
// {  
//     this.vehicleName= vehicleName;  
//     throw new Error("You cannot create an instance of Abstract class");  
  
// }  
// Vehicle.prototype.display=function()  
// {  
//     return this.vehicleName;  
// }  
// var vehicle=new Vehicle();  
// // console.log(vehicle.vehicleName)


//encapsulation:-->
// class Account{
//     #accountNo='1233Ac';
//     #bal=1000;

  

//     getBal(){
//         console.log(this.#bal,this.#accountNo)
//     }
//     withdraw(x){
//         if(isNaN(x) || x>this.#bal){
//             console.log('cant be withdrawl')

//         }
//         else{
//             this.#bal=this.#bal-x;
//             console.log(this.#bal)
//         }
//     }

// }

// let a=new Account(300,200);
// a.getBal();
// a.withdraw(1110);

//polymorphism:--->
// class Shape{
//     constructor(){
//         this.shapeType='anyShape'
//     }
//     printShape(){
//         return this.shapeType;
//     }
// }

// class Circle extends Shape{
//     constructor(rad){
//         super()
//         this.shapeType='circle';
//         this.rad=rad;
//     }
//     printShape(){
//         return `${this.shapeType},${this.rad}`;
//     }

// }

// class Triangle extends Shape{
//     constructor(area){
//         super()
//         this.shapeType='Triangle';
//         this.area=area;
//     }
//     printShape(){
//         return `${this.shapeType},${this.area}`;
//     }

// }

// let c1=new Circle(12);
// let t1=new Triangle(122);

// function printDetails(f1,f2){
//     console.log(f1.printShape(),'\n',f2.printShape())
// }
// printDetails(c1,t1)




//objectCreation method:---->

// function obj(name,age,sex){
//     this.name=name;
//     this.age=age;
//     this.sex=sex;
// }


// obj.prototype.getDetails=function(){
//     console.log(this.name,this.age,this.sex)
// }

// let obj1=new obj('abhi',32,'M');
// obj1.getDetails();


//oops practice:--->
// class Animal{
//     constructor(name,sound){
//         this.name=name;
//         this.sound=sound;
//     }

//     makeSound(){
//         console.log(this.name,'makes: ',this.sound)
//     }
// }

// class Cat extends Animal{
//     constructor(name){
//         super(name,'Meaw');
//     }
// }
// class Dog extends Animal{
//     constructor(name){
//         super(name,'Bark');
//     }
// }

// let c1=new Cat('TOM');
// let d1=new Dog ('Harry');

// c1.makeSound();
// d1.makeSound()

// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }

//     getDetails(){
//         console.log(this.name,this.age);
//     }
// }


// class Child extends Person{
//     // constructor(name){
//     //     super(name,25);

//     // }
// }
// const p1=new Person('abhi',23);
// const p2=new Person('ani',33);

// // const c1=new Child('alash is a child');

// // console.log(c1.hasOwnProperty('name'));//true
// // c1.getDetails()
// // console.log(c1.hasOwnProperty('age'))//true


// // console.log(Object.getPrototypeOf(c1))

// const child=new Child('child',20);

// child.getDetails()
// console.log(child.hasOwnProperty('age'))

