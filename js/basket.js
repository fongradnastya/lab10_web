const basketPrise = document.querySelector(".price");
const headerPrice = document.querySelector(".header__prise");
const deleteItems = document.querySelectorAll(".trash");
const counters = document.getElementsByClassName("counter");
console.log(counters);

deleteItems.forEach((item)=>{
    item.addEventListener("click", function (event){
        const card = event.target.closest(".card");
        card.parentNode.removeChild(card);
        setPrice();
    });
})

let commonPrice = 0;

function checkIsEmpty(){
    if(counters.length == 0){
        console.log("Empty!");
        const img = document.querySelector(".empty");
        const commonPrice = document.querySelector(".common-price");
        const message = document.querySelector(".warning");
        img.style.display = "block";
        commonPrice.style.display = "none";
        message.style.display = "block";
    }
}

function setPrice(){
    commonPrice = 0;
    Array.prototype.forEach.call(counters, function(item){
        let quantity = item.value;
        console.log(quantity);
        const card = item.closest(".card");
        const itemPriceTag = card.querySelector(".card-price");
        let itemPrice = Number(itemPriceTag.textContent.trim().slice(0, -3));
        commonPrice += quantity * itemPrice;
        
    });
    basketPrise.textContent = commonPrice + " р.";
    headerPrice.textContent = commonPrice + " р.";
    checkIsEmpty();
}

Array.prototype.forEach.call(counters, function(item){
    item.addEventListener("input", ()=>{
        setPrice();
    })
});

setPrice();