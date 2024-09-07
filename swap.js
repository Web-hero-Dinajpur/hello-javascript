let a = 5;
let b = 7;
console.log(a, b);
let temp = a;   // tempurary akta pattro nite hbe.. 
a = b;
b = temp;
console.log(a, b);


// 2nd rulse

let x = 4;
let y = 6;
console.log(x, y); /// na bujhle o somosha nai j kono akta rulse janlei hbe.. bujhte parle good
[x, y] = [y, x];
console.log(x, y)