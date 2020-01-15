const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email-address');
const password = document.getElementById('password');

console.log(firstName);
form.addEventListener('submit', e => {
    
    e.preventDefault();

    if (firstName.value === '') {
        setError(firstName, 'First Name cannot be empty');
    } else {
        setSuccess(firstName)
    }
    if (lastName.value === '') {
        setError(lastName, 'Last Name cannot be empty');
    } else {
        setSuccess(lastName);
    }
    if (email.value === '') {
        setError(email, 'Second Name cannot be empty');
    } else if(isEmail(email.value) === false) {
        setError(email, 'Looks like this is not an email');
    } 
    else {
        setSuccess(email);
    }
    if(password.value === '') {
        setError(password, 'Password cannot be empty');
    } else {
        setSuccess(password)
    }
})



function setError(input, message) {
    const inputContainer = input.parentElement;
    const small = inputContainer.querySelector('small');
    inputContainer.className = 'input-container invalid';
    small.innerText = message;
}
function setSuccess(input) {
    const inputContainer = input.parentElement;
    inputContainer.className = 'input-container'; 
}

function isEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(email); 

}