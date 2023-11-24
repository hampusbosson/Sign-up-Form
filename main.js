const password = document.getElementById('password');
const confPassword = document.getElementById('conf-password');
const confPasswordText = document.getElementById('conf-password-text');
const submitbutton = document.getElementById('submit-btn');
const name = document.getElementById('name');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const tel = document.getElementById('tel');
const req1 = document.getElementById('required-1');
const req2 = document.getElementById('required-2');
const req3 = document.getElementById('required-3');
const req4 = document.getElementById('required-4');
const req5 = document.getElementById('required-5');



confPassword.addEventListener('input', () => passwordMatch());

submitbutton.addEventListener('click', () => requiredField());


function passwordMatch() {
    if (password.value !== confPassword.value) {
        confPasswordText.textContent = 'Passwords did not match!';
    } else {
        confPasswordText.textContent = '';
    }
}

function requiredField() {
    if (name.value == '') {
        req1.textContent = 'This field is required *';
    } else {
        req1.textContent = '';
    } if (lastName.value == '') {
        req2.textContent = 'This field is required *';
    } else {
        req2.textContent = '';
    } if (email.value == '') {
        req3.textContent = 'This field is required *';
    } else {
        req3.textContent = '';
    } if (tel.value == '') {
        req4.textContent = 'This field is required *';
    } else {
        req4.textContent = '';
    } if (password.value == '') {
        req5.textContent = 'This field is required *';
    } else {
        req5.textContent = '';
    } if (confPassword.value == '') {
        confPasswordText.textContent = 'This field is required *';
    } else {
        confPasswordText.textContent = '';
    } 
}