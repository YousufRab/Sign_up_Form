function validatePass() {
    var pw1 = document.getElementById('pwd');
    var pw2 = document.getElementById('confirmPwd');
    if (pw1 != pw2) {
        alert("Passwords did not match");
        return false;
    } else {
        return true;
    }
}

const submitBtn = document.getElementById('subBtn');
submitBtn.addEventlistener('click', () => {
    if (validatePass() == false) {
        alert("Passwords did not match");
        window.history.forward(-1);
    } 
});