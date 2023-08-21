// function printDiamondPattern(rows) {
//     if (rows % 2 === 0) {
//       console.log("Number of rows should be odd for a symmetric diamond.");
//       return;
//     }
  
//     const midpoint = Math.floor(rows / 2);
  
//     for (let i = 0; i < rows; i++) {
//       const spaces = Math.abs(midpoint - i);
//       const stars = rows - 2 * spaces;
//       const spaceStr = " ".repeat(spaces);
//       const starStr = "*".repeat(stars);
//       console.log(spaceStr + starStr + spaceStr);
//     }
//   }
  
//   const numberOfRows = 7; // Change this to adjust the size of the diamond
//   printDiamondPattern(numberOfRows);



//my method:
let n=5;
let pattrn='';
let pattern2='';
for(let i=1;i<=n;i++){
    //for space print:
    for(let s =0;s<n-i;s++){
        pattrn+=' ';

    }
    //start printing:
    for(let j=0;j<(2*i-1);j++){
        pattrn+='*';
    }
    pattrn+='\n';

}
// console.log(pattrn);

for(let i=n-1;i>0;i--){
    for(let j=0;j<n-i;j++){
        pattern2+=' ';
    }
    for(let k=0;k<(2*i-1);k++){
        pattern2+='*';
    }
    pattern2+='\n';
}
// console.log(pattern2)
console.log(pattrn+pattern2);
  