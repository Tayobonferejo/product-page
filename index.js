
const parentOfPrice = document.querySelector(".price-container");
const quantity = document.getElementById("quantity");
const button = document.getElementById("button");
const numberOfItem = document.getElementById("numberOfItem");
const discountedPrice = document.getElementById("discount");
const checkout = document.getElementById("product-item-container")
const unitPrice = (Number(discountedPrice.innerText));

let individualUnit = 0;
console.log(unitPrice);

parentOfPrice.addEventListener("click" , function(event){
    if(event.target.id === "increase")
    {
        individualUnit = individualUnit + 1;
        sumOfUnit = individualUnit;
        quantity.innerText = individualUnit;
        numberOfItem.innerText = individualUnit;
        numberOfItem.className = "number-block"

    }

         if(event.target.id === "decrease")
    {

        individualUnit -= 1;
        
        if(individualUnit < 0) {
            individualUnit = 0;
            quantity.innerText = individualUnit;
            numberOfItem.innerText = "";
            numberOfItem.classList.remove("number-block");
        }
        else {
            sumOfUnit = individualUnit;
            quantity.innerText = individualUnit;
            numberOfItem.innerText = individualUnit;
        }
    }

})

function totalPrice (individualUnit, unitPrice) {
    return checkout.innerHTML = `
    <div class="cart-block">
        <div>
            <img src="/images/image-product-1.jpg" id="checkout-image">
        </div>
        <div>
            <p>Fall Limited Edition Sneakers</p>
            <p>$${unitPrice} × ${individualUnit} <span id="total">$${unitPrice * individualUnit}</span></p>
        </div>
        <div>
            <img src="/images/icon-delete.svg" alt="delete icon" id="delete">
        </div>
    </div>

    <button id="button-checkout">Checkout</button>
    `
}

button.addEventListener("click", function() {

    if(individualUnit === 0)
    {
        alert("You have not added any item on the cart");
    }

    else {
        totalPrice(individualUnit, unitPrice);
    }
    
});


checkout.addEventListener("click", function(event)
{
    if(event.target.id === "delete")
    {
        deleteCart()
    }
})
function deleteCart() {
    checkout.innerHTML = `<p>Your cart is empty</p>`; // removes everything inside the div
    quantity.innerText = 0;
}