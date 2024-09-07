function OddNumber(odds) {
    const ArrayOdd = [];
    for(const odd of odds){
        if(odd % 2 === 1){
            // console.log(odd)
            ArrayOdd.push(odd);
        }
    }
   let sum = 0;
   for(const number of odds){
    sum = sum + number;
   }
   const count = odds.length;
   const avg = sum / count;
   return avg;
}
const numbers = [21, 23, 34, 45, 56, 57, 9, 11];
const avg = OddNumber(numbers);
console.log('avarage of the od numbers us',avg);