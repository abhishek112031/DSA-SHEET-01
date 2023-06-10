class BankAccount{
   
    //private field must be declared here
    #acno;
    #balance;
    constructor(){
        this.#acno='ab001';
        this.#balance=5000
    }

    //we can access it inside of the class:
    setBalance(val){
        if(isNaN(val)){
            console.log('not a valid input')
        }
        else{
            this.#balance+=val;
            // console.log(this.#balance)
        }
    }
    withdraw(amount){
        if(isNaN(amount)){
            console.log('not a valid input')

        }
        else if(this.#balance<amount){
            console.log('dont have sufficient balance!, a/c bal: ',this.#balance)
        }
        else{
            this.#balance-=amount;
            console.log(`rs:${amount} is deducted from a/c no: ${this.#acno} ,available bal:${this.#balance}`)
        }

    }

    getDetails(){
        console.log('total bal:',this.#balance ,'acno:',this.#acno);
    }
}
let abhi=new BankAccount();
//console.log(abhi.#acno)//will not be accicible outside of the class
// abhi.getDetails()
// abhi.setBalance(50);
// abhi.setBalance(50);
// abhi.withdraw(50)
// abhi.withdraw(5050)
abhi.withdraw(5050)





// abhi.getDetails()