function validatePass() {
    var pw1 = document.getElementById('pwd').value;
    var pw2 = document.getElementById('confirmPwd').value;
    if (pw1 != pw2) {
        alert("Passwords did not match. Please provide matching passwords");
        return false;
    } else {
        return true;
    }
}

const submit = document.getElementById('subBtn');
submit.addEventListener('click', (event) => {
    if (validatePass() == false) {
        event.preventDefault()
    } 
})