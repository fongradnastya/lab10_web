const form = document.forms.main;
console.log(form);

const checkBox = form.check;
console.log(checkBox.value);
console.log(checkBox.checked);
const addres = form.deliveryAdress;

checkBox.addEventListener("change", function(e){
    if(checkBox.checked){
        addres.closest(".group-choose").style.display = "block";
    }
    else{
        addres.closest(".group-choose").style.display = "none";
    }
});

const phone = form.tel;
const email = form.email;

function checkInput(){
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();
    if(emailValue === ''){
        console.log("Mistake");
    }
    if(checkBox.checked){
        const group = addres.closest(".group-choose");
        const message = group.querySelector(".error-message");
        if(addres.value == "Выберите адрес доставки"){
            addres.classList.add("input-mistake");
            addres.classList.remove("input-success");
            message.textContent = "Значение не выбрано";
        }
        else{
            addres.classList.add("input-success");
            addres.classList.remove("input-mistake");
            message.textContent = "";
        }
    }
    

}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    checkInput();
});
