function checkValue(el1, el2) {
    if (el1.value !== "")
    {  
        if (el1.value === el2.value) {
            message = "A senha é válida.";
        } else {
            message = "As senhas não coincidem.";
        } 
    } else {
        message = "Ambos os campos de senha devem ser preenchidos.";
    }
    return message;
}
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm");
const submit = document.getElementById("submit");