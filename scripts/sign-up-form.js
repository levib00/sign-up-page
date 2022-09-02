
function passValidation() {
    const invalidPass = document.getElementById('invalid-pass')
    const pass = document.getElementById('pass');
    const confirmPass = document.getElementById('confirm-pass');
    if (pass.value !== confirmPass.value) {
        console.log(pass.value);
        pass.classList.add('error');
        console.log(confirmPass.value);
        confirmPass.classList.add('error');
        invalidPass.style.visibility = 'visible';
        return false;
    }else {
        pass.classList.remove('error');
        confirmPass.classList.remove('error');
        invalidPass.style.visibility = 'hidden';
        return true;
    }
}