class Stack{
    constructor(maxSize){
        this.stack=[];
        this.maxSize=maxSize;
        this.size=0;
        this.minstack=[];
    }

    pushOp(x){
        if(!this.isFull()){
            this.stack.push(x);
            this.size++;
            if(this.isEmpty()){
                this.minstack.push(x);
            }
            else{
                this.minstack.push(Math.min(x,this.minstack[this.minstack.length-1]));

            }

            
        }
        else{
            console.log('the stack is full')
        }

    }

    popOp(){
        if(!this.isEmpty()){
            this.stack.pop();
            this.size--;

        }
        else{
            console.log('cant remove element from empty stack')
        }

    }
    top(){
        if(!this.isEmpty()){
            return this.stack[this.stack.length-1];
        }
        return -1;

    }

    minElem(){
        return this.minstack[this.minstack.length-1]
    }

    isEmpty(){
        return this.size===0;

    }

    isFull(){
        return this.maxSize===this.size;

    }
}



const stack1=new Stack(3);
stack1.pushOp(1);
stack1.pushOp(2);
stack1.pushOp(3);
console.log(stack1.minstack)
