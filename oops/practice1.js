// class Employee{

//     constructor(hr,sal){
//         this.hr=hr;//6
//         this.sal=sal;//400
//     }

//     getDetails(){
       
//         return this.addWork();


//     }

//     addWork(){
//         if(this.hr>6){
//             return this.addSalary()+5
//         }
//         else{
//             return this.addSalary();
//         }
//     }
//     addSalary(){
//         if(this.sal<500){
//             return this.sal+10
//         }
//         else{
//             return this.sal;
//         }
//     }
// }

// let e1=new Employee(6,400);
// console.log(e1.getDetails())

// class Employee{


//     getDetails(sal,hr){
       
//       let sal1=this.addSalary(sal);
//       let sal2=this.addWork(sal1,hr);
//       return sal2;


//     }

//     addWork(sal,hr){
//         if(hr>6){
//             return sal+5
//         }
//         else{
//             return sal;
//         }
//     }
//     addSalary(sal){
//         if(sal<500){
//             return sal+10
//         }
//         else{
//             return sal;
//         }
//     }
// }

// let e1=new Employee();
// console.log(e1.getDetails(500,6));



