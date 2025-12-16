
const parentOfPrice = document.querySelector(".price-container");
const quantity = document.getElementById("quantity")

let individualUnit = 0


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