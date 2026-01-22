
const parentOfPrice = document.querySelector(".price-container");
const productImage = document.querySelector(".product-image-slider");
const sliderImages = document.querySelectorAll(".sliderImages");
const thumbnailImages = document.querySelectorAll(".slider-img");
const quantity = document.getElementById("quantity");
const button = document.getElementById("button");
const numberOfItem = document.getElementById("numberOfItem");
const discountedPrice = document.getElementById("discount");
const checkout = document.getElementById("product-item-container")
const cartIcon = document.getElementById("cart-icon");
const close = document.getElementById("close");
const aside = document.getElementById("aside")
const unitPrice = (Number(discountedPrice.innerText));
const sliderDiv = document.getElementById("slider-div");
const imageSlider = document.getElementById("image-slider");
const sliderSection = document.getElementById("slider-section");

const images = ["/images/image-product-1.jpg", "/images/image-product-2.jpg","/images/image-product-3.jpg","/images/image-product-4.jpg"];


let individualUnit = 0;
let imageCount;
console.log(unitPrice);

/* this section of code ensure the when you click increase button i.e the plus sign it increase and also 
the minus sign functionality i.e reduce after it increase*/


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

/* this section of code does the calculation of the price i.e it multiply the unit price
 of the item which is the shoe with the price of the item and also show the cart
  of the checkout in html*/


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


/* the code is the event listener that will trigger the button after the
 number of item have been select this is the buttoon beside the increment
  and decrement button*/

button.addEventListener("click", function() {

    if(individualUnit === 0)
    {
        alert("You have not added any item on the cart");
    }

    else {
        totalPrice(individualUnit, unitPrice);
        numberOfItem.innerText = individualUnit;
        numberOfItem.className = "number-block";
        quantity.innerText = "0";
    }
    
});

/* the code uses the event delegation to ensure the delete 
icon remove the cart from dom */

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

cartIcon.addEventListener("click", function(event)
{
     if(event.target.id === "cart-icon")
    {
        aside.classList.toggle("checkout-div");
    }
});

/*the code ensure the function of the slider*/

sliderDiv.addEventListener("click", function(event) {

    if(event.target.id === "next") {

        imageCount = imageCount + 1;
        imageSlider.src = `${images[imageCount]}`;
        if(imageCount === images.length) {
            imageCount = 0;
            imageSlider.src = `${images[imageCount]}`
        }

    }

       if(event.target.id === "previous") {


        if(imageCount === 0) {
            imageCount = images.length;
            imageSlider.src = `${images[imageCount]}`
        }
        imageCount = imageCount - 1;
        imageSlider.src = `${images[imageCount]}`;

    }

});

close.addEventListener("click", function (){
    sliderSection.classList.toggle("hidden"); 

})

sliderImages.forEach((img, index) => {
  img.addEventListener("click", (event) => {
    const newSrc = event.target.src.replace("-thumbnail", "");
    imageSlider.src = newSrc;
    imageCount = index;
    sliderSection.classList.toggle("hidden"); 
  });
});


thumbnailImages.forEach(img => {
  img.addEventListener("click", (event) => {
    const newSrc = event.target.src.replace("-thumbnail", "");
    imageSlider.src = newSrc;
  });
});
