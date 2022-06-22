const myForm = document.getElementById("form");





myForm.noValidate = true;



function validateForm(e){
    const form = e.target;
    console.log(form.pswd.value)
    if (form.pswd.value === form.pswdconf.value) {
        
    } else {
        form.pswd.setCustomValidity(err);
        form.pswd.add("invalid")
        form.pswdconf.add("invalid")
    }

    if(!form.checkValidity()){

        e.preventDefault();
        e.stopImmediatePropagation();

    }
}


myForm.addEventListener("submit", validateForm);
