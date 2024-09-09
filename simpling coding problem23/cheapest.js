const phones = [
    {name:'Iphone', price:10000, camera:'12mp', color:'black'},
    {name:'Waltone', price:109000, camera:'13mp', color:'Brown'},
    {name:'Samsung', price:160000, camera:'42mp', color:'evergreen'},
    {name:'Grameen', price:130000, camera:'42mp', color:'yellow'},
    {name:'GDL', price:140000, camera:'62mp', color:'blue'},
    {name:'oppo', price:104000, camera:'82mp', color:'green'},
    {name:'vivo', price:1400, camera:'32mp', color:'silver'},
];


function getCheapestPhone(numbers){
    let min = numbers[0];
    for(const number of numbers){
        if(min.price > number.price){
            min = number
        }
    }
    return min;
}
const cheap = getCheapestPhone(phones);
console.log('Cheapest phone is: ', cheap);


// 2nd ruls max price ber korte hbe 

const phonesDetails = [
    {name:'Iphone', price:10000, camera:'12mp', color:'black'},
    {name:'Waltone', price:109000, camera:'13mp', color:'Brown'},
    {name:'Samsung', price:160000, camera:'42mp', color:'evergreen'},
    {name:'Grameen', price:1300000, camera:'42mp', color:'yellow'},
    {name:'GDL', price:140000, camera:'62mp', color:'blue'},
    {name:'oppo', price:104000, camera:'82mp', color:'green'},
    {name:'vivo', price:14000, camera:'32mp', color:'silver'},
];


function maxPrice(UpPrices){
    let max = UpPrices[0];
    for(const UpPrice of UpPrices){
        if(max.price < UpPrice.price){
            max = UpPrice;
        }

    }
    return max;
}

const PhoneupPrice = maxPrice(phonesDetails);
console.log('High price phone details:', PhoneupPrice)





