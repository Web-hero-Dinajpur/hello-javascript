const products = [
    {name: 'shampoo', price: 200, quantity: 3},
    {name: 'saban', price: 40, quantity: 3},
    {name: 'soda', price: 210, quantity: 3},
    {name: 'juch', price: 20, quantity: 3},
]

function getShopingTotal(products){
    let total = 0;
    for(const product of products){
        const Shoping = product.price * product.quantity;
        total = total + Shoping;
    }
    return total;
}

const TotalShoping = getShopingTotal(products);
console.log(TotalShoping)