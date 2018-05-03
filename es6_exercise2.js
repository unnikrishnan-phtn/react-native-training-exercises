var calculatePrice = ({price, tax, discount = 10}) => {
    let taxablePrice = price - (price * (discount / 100));
    let priceWithTax = taxablePrice + (taxablePrice * (tax / 100));
    return priceWithTax;
}
// Example 1
console.log(calculatePrice({tax:10, price:100}));
//Example 2
console.log(calculatePrice({price:1000, tax:30, discount:5}));
