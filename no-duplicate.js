const biraniKhor = ['abul', 'babul', 'kabul', 'cabul', 'dabul', 'abul', 'cabul', 'kabul', 'dabul', 'nabul', 'mokbul', 'cakbul'];

const number = [1, 2, 4, 5, 6, 2, 3, 4, 5, 6, 7, 8, 98, 8,6, 1, 2, 9]

function noDuplicate(array){
    const unique = [];
    for(const items of array){
        if(unique.includes(items)===false){
            unique.push(items);
        }
    }
    return unique;
}
const uniqueArray = noDuplicate(biraniKhor);
console.log(uniqueArray);

// second step number diye 

function noDuplicateNumber(arrayNmbr){
    const uniqueN = [];
    for(noCopy of arrayNmbr){
        if(uniqueN.includes(noCopy)===false){
            uniqueN.push(noCopy)
        }
    }
    return uniqueN;
}
const uniqueNumber = noDuplicateNumber(number);
console.log(uniqueNumber);
