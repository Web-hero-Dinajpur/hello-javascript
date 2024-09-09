const heights = [34, 35, 23, 45, 56, 57, 67, 78, 89, 12, 23];

function getMax(numbers){
    let max = numbers[0];
    for(const num of numbers){
        if(num > max){
            max = num;
        }
    }
    return max;
}
const max = getMax(heights);
console.log('max value is', max);