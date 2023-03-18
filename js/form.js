const form = document.forms.main;
console.log(form);

const checkBox = form.check;
console.log(checkBox.value);
console.log(checkBox.checked);
const addres = form.deliveryAdress;

checkBox.addEventListener("change", function(){
    if(checkBox.checked){
        addres.closest(".group-choose").style.display = "block";
    }
    else{
        addres.closest(".group-choose").style.display = "none";
    }
});

const phone = form.phone;
const email = form.email;
let hasMistake = false;

function checkInput(){
    hasMistake = false;
    checkAddres();
    checkSize();
    checkTextInput(phone);
    checkTextInput(email);
    if(! hasMistake){
        console.log("correct!");
    }
}

function checkAddres(){
    if(checkBox.checked){
        const group = addres.closest(".group-choose");
        const message = group.querySelector(".error-message");
        if(addres.value == "Выберите адрес доставки"){
            addres.classList.add("input-mistake");
            addres.classList.remove("input-success");
            message.textContent = "Значение не выбрано";
            hasMistake = true;
        }
        else{
            addres.classList.add("input-success");
            addres.classList.remove("input-mistake");
            message.textContent = "";
        }
    }
}

function checkSize(){
    let sizeInputs = form.size;
    console.log(sizeInputs);
    for(let id = 0; id < sizeInputs.length; id++){
        if(sizeInputs[id].value == "Размер"){
            sizeInputs[id].classList.add("input-mistake");
            sizeInputs[id].classList.remove("input-success");
            hasMistake = true;
        }
        else{
            sizeInputs[id].classList.add("input-success");
            sizeInputs[id].classList.remove("input-mistake");
        }
    }
}

function checkTextInput(input){
    const group = input.closest(".group");
    const message = group.querySelector(".error-message");
    const icon = group.querySelector(".bi");
    const emailValue = input.value.trim();
    if(emailValue === ''){
        input.classList.add("input-mistake");
        input.classList.remove("input-success");
        hasMistake = true;
        message.textContent = "Поле не заполнено";
        icon.classList.add("bi-x-circle-fill");
        icon.classList.remove("bi-check-circle-fill")
    }
    else{
        input.classList.remove("input-mistake");
        input.classList.add("input-success");
        message.textContent = "";
        icon.classList.remove("bi-x-circle-fill");
        icon.classList.add("bi-check-circle-fill")
    }
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    checkInput();
});
