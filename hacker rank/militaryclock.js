//Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

function timeConversion(s) {
    // Write your code here

    let res;

    if(s.substring(8,10)==='AM' && s.substring(0,2)==='12'){
        res=s.substring(0,8).replace(/12/,'00');
    }
    else if(s.substring(8,10)==='PM' && s.substring(0,2)==='12'){
        res=s.replace(/PM/,'');
    }
    else if(s.substring(8,10)==='AM'){
        res=s.replace(/AM/,'');
    }
    else {
        let normalClock=Number(s.substring(0,2));
        let militaryclock=normalClock+12;
        res=militaryclock.toString()+s.substring(2,8);
    }




    return res;

}
console.log(timeConversion('01:00:00PM'))