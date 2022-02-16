export const priceFormatter = ((price) => {
    if (isNaN(price)) {
        console.log("Price should be a number");
        return price;
    }
    return `R$ ${(price / 100).toFixed(2).toString().replace('.', ',')}`
})