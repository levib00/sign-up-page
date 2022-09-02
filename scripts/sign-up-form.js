
function passValidation() {
    const invalidPass = document.getElementById('invalid-pass')
    const pass = document.getElementById('pass');
    const confirmPass = document.getElementById('confirm-pass');
    //unhides text that says passwords do not match and adds error
    //class to change appearance if passwords don't match.
    
    if (pass.value !== confirmPass.value) {
        console.log(pass.value);
        pass.classList.add('error');
        console.log(confirmPass.value);
        confirmPass.classList.add('error');
        invalidPass.style.visibility = 'visible';
        return false; //prevents form from sending
    }else {
        //undoes everything done above
        pass.classList.remove('error');
        confirmPass.classList.remove('error');
        invalidPass.style.visibility = 'hidden';
        return true; //allows form to send.
    }
}