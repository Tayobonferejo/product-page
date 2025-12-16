
const parentOfPrice = document.querySelector(".price-container");
const quantity = document.getElementById("quantity");
const button = document.getElementById("button");
const discountedPrice = document.getElementById("discount");
const checkout = document.getElementById("product-item-container")
const unitPrice = (Number(discountedPrice.innerText));

let individualUnit = 0
console.log(unitPrice);

parentOfPrice.addEventListener("click" , function(event){
    if(event.target.id === "increase")
    {
        individualUnit = individualUnit + 1;
        sumOfUnit = individualUnit;
        quantity.innerText = individualUnit;

    }

         if(event.target.id === "decrease")
    {

        individualUnit -= 1;
        
        if(individualUnit < 0) {
            individualUnit = 0;
             quantity.innerText = individualUnit;
        }
        else {
            sumOfUnit = individualUnit;
            quantity.innerText = individualUnit;
        }
    }

})

function totalPrice (individualUnit, unitPrice) {
    return checkout.innerHTML = `<div class=""checkout-div>
    <div>
        <img src="/images/image-product-1.jpg" class="product-image">
    </div>
    <div>
        <p>Fall Limited Edition Sneakers</p>
        <p>$ ${unitPrice} × ${individualUnit} $ ${unitPrice * individualUnit}</p>
    </div>
    <div>
    </div>
        <img src="/images/icon-delete.svg" alt="delete icon">
    </div>`
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