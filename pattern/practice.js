
// let n = 5;

// let s = '';


// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n-i;j++){
//         s=s+" ";
//     }
//     for(let k=1;k<=2*i-1;k++){
//         s=s+'*';
//     }

//     s+='\n';
// }

// console.log(s)



//right-angle triangle:-->
// for(let i=1;i<=n;i++){
//     for(let j=0;j<i;j++){
//         s+='*';
//     }
//     s+='\n';
// }



//reverse triangle:
// for (let i = 1; i <= n; i++) {
//     for (let j = i; j < n; j++) {
//         s += ' ';
//     }
//     for (let k = 0; k < i; k++) {
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);


// let n=5;
// let s='';
// for(let i=1;i<=n;i++){
//     for(let j=0;j<i;j++){
//         s+='*';
//     }
//     s+='\n';
// }
// console.log(s);

// rev:
// for(let i=1;i<=n;i++){
//     for(let j=n-1;j>=i;j--){
//         s+=' '
//     }
//     for(let k=0;k<i;k++){
//         s+='*'
//     }
//     s+='\n';
// }
// console.log(s)



let n=5;
let s='';
for(let i=1;i<=n;i++){
    //for space:-->
    for(let j=n-1;j>=i;j--){
        s+=' ';
    }
    for(let k=1;k<=(2*i)-1;k++){
        s+='*';
    }

    s+='\n';
}
for (let p=n-1;p>=1;p--){
    for(let l=0;l<n-p;l++){
        s+=' ';
    }
    for(let m=1;m<=p;m++){
        s+='*';
    }

    s+='\n';
}
console.log(s)