import {isFilled, validEmail, validPassword, validPasswords} from '../../../assets/scripts/validation.js';
//console.log('test');

resetPasswordForm.addEventListener('submit', (event) => {
	let email = document.getElementById("email");
    let password = document.getElementById('password');
    let confirmationPassword = document.getElementById('confirmationPassword');
	
	validEmail(email);
    validPassword(password);
    validPasswords(password, confirmationPassword)

    if (isFilled(email, password, confirmationPassword)) {
    	Send(email.value, password.value, confirmationPassword.value).then((response) => {
    		if (response.status === 200) {
                window.location.href = '../../../index.html';
            }
    	})
    };
})
//console.log('test2');
async function Send(email, password, confirmationPassword) {
	let obj = {
    	'password': password,
    	'confirmationPassword': confirmationPassword,
    	'email': email
    }
    return await fetch('https://geekhub-frontend-js-9.herokuapp.com/api/users/reset_password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.token
        },
        body: JSON.stringify(obj)
    })
    .then((response) => response)

}
//console.log('test3');