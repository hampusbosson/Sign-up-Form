//const declarations
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

//eventlisteners
confPassword.addEventListener('input', () => passwordMatch());
submitbutton.addEventListener('click', () => requiredField());

//function to check if passwords match
function passwordMatch() {
    if (password.value !== confPassword.value) {
        confPasswordText.textContent = 'Passwords did not match!';
    } else {
        confPasswordText.textContent = '';
    }
}

//function to not allow empty fields
function requiredField() {
    const fields = [
        { input: name, requiredText: req1 },
        { input: lastName, requiredText: req2 },
        { input: email, requiredText: req3 }, 
        { input: tel, requiredText: req4 },
        { input: password, requiredText: req5 },
        { input: confPassword, requiredText: confPasswordText } 
    ];

    fields.forEach(field => {
        field.requiredText.textContent = field.input.value === '' ? 'This field is required *' : '';
    });
}