function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = chairQuantity * 2;
    const perTableWood = tableQuantity * 3;
    const perBedWood = bedQuantity * 4;
    // console.log(perChairWood, perTableWood, perBedWood);

    const totalQuantity = (perChairWood + perTableWood + perBedWood);
    return totalQuantity;
}
const wood = woodQuantity(3, 4, 5);
console.log('wood needed', wood);

// 2nd practis 

function Fasion(shirtQuantity, pantQuantity, shoeQuantity){
    const shirtTotalPrice = shirtQuantity * 500;
    const pantTotalPrice = pantQuantity * 300;
    const shoeTotalPrice = shoeQuantity * 900;

    const totalPrice = (shirtTotalPrice + pantTotalPrice + shoeTotalPrice);
    return totalPrice;

}
const totalFasionPrice = Fasion(2, 1, 5);
console.log('total Shirt, Pant and Shoe price', totalFasionPrice)