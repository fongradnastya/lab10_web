const form = document.forms.main;
console.log(form);

const checkBox = form.check;
console.log(checkBox.value);
console.log(checkBox.checked);

checkBox.addEventListener("change", function(e){
    const addres = form.deliveryAdress;
    console.log(addres);
    if(checkBox.checked){
        addres.style.display = "block";
    }
    else{
        addres.style.display = "none";
    }
});