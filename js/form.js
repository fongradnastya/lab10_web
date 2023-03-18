const form = document.forms.main;
console.log(form);

const checkBox = form.check;
console.log(checkBox.value);
console.log(checkBox.checked);

checkBox.addEventListener("change", function(e){
    const addres = form.deliveryAdress;
    if(checkBox.checked){
        addres.style.display = "block";
    }
    else{
        addres.style.display = "none";
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
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();

});
