const myForm = document.getElementById("form");
const error = document.querySelector(".error");









function validateForm(e){
    const form = e.target;
    console.log(form.pswd.value)
    if (form.pswd.value === form.pswdconf.value) {
        if(!form.checkValidity()){
            e.preventDefault();
            e.stopImmediatePropagation();
        }
        
    } else {
        e.preventDefault();
        e.stopImmediatePropagation();
        error.textContent= "* Passwords do not match";
    }


}


myForm.addEventListener("submit", validateForm);
