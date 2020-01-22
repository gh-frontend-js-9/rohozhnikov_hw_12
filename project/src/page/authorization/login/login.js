import sendCurrent from '../../../assets/scripts/validateCurrent.js';
import {isFilled, validEmail, validPassword} from '../../../assets/scripts/validation.js';

if (localStorage.token) {
    sendCurrent(localStorage.token)
    .then((response) => {
    	if (response.status === 200) {
    		return response.json();
      	} else {throw new Error("Bad response")}
    })  
    .catch((error)=> {
      console.log(error);
    });
}

logInForm.addEventListener("submit", (event) => {
    let email = document.getElementById("email");
    let password = document.getElementById('password');

    validEmail(email);
    validPassword(password);
    
    if (isFilled(email, password)) {
        Send(email.value, password.value).then((response) => {
            if (response.status === 200) {
                window.location.href = '../../../index.html'
            }
        })
    }
});

async function logIn(email, password) {
    let obj = {
        'email': email,
        'password': password
    }
    return await fetch('https://geekhub-frontend-js-9.herokuapp.com/api/users/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
}