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

submitBtn = document.getElementById('subBtn');
