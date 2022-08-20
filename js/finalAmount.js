
function getTotal(){

    const itemOneTotalString = document.getElementById("totalItemPriceOne").innerText;
    const itemOneTotal = parseInt(itemOneTotalString);

    const itemTwoTotalString = document.getElementById("itemPriceTwo").innerText;
    const itemTwoTotal = parseInt(itemTwoTotalString);

    const productsPrice = itemOneTotal + itemTwoTotal;
    document.getElementById("subTotal").innerText = productsPrice;
    // console.log(finalPrice);

    const taxAmountString = (productsPrice * 0.1).toFixed(0.2);
    const taxAmount = parseFloat(taxAmountString);

    document.getElementById("taxField").innerText = taxAmount;

    const finalAmount = productsPrice + taxAmount;

    document.getElementById("totalPrice").innerText = finalAmount;


}
