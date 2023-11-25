// Check if given strings are rotations of each other or not

let S1 = 'ABCD', S2 = 'CDAB';

function isRotationOfEachOther(s1,s2){

    if(s1.length!==s2.length){
        return false;
    }
    // function lrotation(){
        let s11=s1.split('');

        for(let i=0;i<s11.length;i++){
            s11.push(s11.shift());
            if(s11.join('')===s2){
                return true;
            }
        }
        return false;
    // }

    // function rrotation(){
    //     let sr=s1.split('');
    //     for(let i=0;i<sr.length;i++){
    //         sr.unshift(sr.pop());
    //         if(sr.join('')===s2){
    //             return true;
    //         }
    //     }
    //     return false;

    // }


    // return lrotation()||rrotation();
}
console.log(isRotationOfEachOther(S1,S2));