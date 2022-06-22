const myForm = document.getElementById("form");
const error = document.querySelector(".error");





myForm.noValidate = true;



function validateForm(e){
    const form = e.target;
    console.log(form.pswd.value)
    if (form.pswd.value === form.pswdconf.value) {
        
    } else {
        e.preventDefault();
        e.stopImmediatePropagation();
        error.textContent= "* Passwords do not match";
    }


}


myForm.addEventListener("submit", validateForm);
