//execution inside callstack:
const fs=require('fs');
const path=require('path');

console.log('1');
process.nextTick(() => {
    console.log('2');
});
//timer queue
setTimeout(()=>{

    console.log('3');
},0);

//i/o queue:
fs.readFile(path.join(__dirname,'text.txt'),'utf-8',(err,res)=>{
    if(!err){
        console.log('fs system')
    }
})

//check queue:
setImmediate(()=>{
    console.log('4');
});