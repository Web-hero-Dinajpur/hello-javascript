const taday = new Date();
const date = new Date('2062-10-19');
console.log(date.getMonth());
console.log(date.getDay());

const specificDate = new Date(2091, 0,  26);
console.log(specificDate);
specificDate.setMonth(10);
console.log(specificDate.toLocaleDateString('en-GB'));

//uniz epoc
// time zone/ utc / day light saving/ such diye dekha lagbe ata vinno desher vinno time 