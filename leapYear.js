// function leapYear(year){
//     if(year % 4 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// const YesYear = leapYear(2025);
// console.log(YesYear);


// leap year second step it is a realy step and we get result very good

function IsLeapYear(IsYear){
    if(IsYear % 100 !== 0 && IsYear % 4 ===0 ){
        return true;
    }
    if(IsYear % 400 === 0){
        return true;
    }
    else{
        return false;
    }
}
 const LeapYear1 = IsLeapYear(2100);
 const LeapYear2 = IsLeapYear(2400);
 const LeapYear3 = IsLeapYear(1900);
 const LeapYear4 = IsLeapYear(2052);
 console.log(LeapYear1, LeapYear2, LeapYear3, LeapYear4);
