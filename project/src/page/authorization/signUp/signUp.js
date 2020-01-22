import {isFilled, validEmail, validPassword, validName} from '../../../assets/scripts/validation.js';

signUpForm.addEventListener("submit", (event) => {
    let email = document.getElementById("email");
    let password = document.getElementById('password');
    let name = document.getElementById('name');

    validEmail(email);
    validPassword(password);
    validName(name);

    if (isFilled(email, password, name)) {
        Send(email.value, password.value, name.value).then((response) => {
            if (response.status === 200) {
                window.location.href = '../../../index.html'
            }
        })
    }
});

async function singUp(email, password, name) {
    let obj = {
        'email': email,
        'password': password,
        'validName': name
    }
    return await fetch('https://geekhub-frontend-js-9.herokuapp.com/api/users/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
}

