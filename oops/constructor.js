function Vehicle(name,color,models){
    this.name=name;
    this.color=color;
    this.models=models;

    //definning function/method inside constructor:
    this.getColor=function(){
        console.log(this.color) ;
    }
}
 //definning function/method outside constructor:

//cannot use arraow function: 
Vehicle.prototype.getDetails=function(){
    console.log(this.name,this.color,this.models);
} 


let car1=new Vehicle('bmw','white','r4');

car1.getColor();
car1.getDetails();
