let password1 = document.querySelector('#pwd1');
let password2 = document.querySelector('#pwd2');
let results = document.querySelector('#results');

function checkPassword () {
    results.innerText = password1.value == password2.value ? 'Passwords Match' : 'Passwords Not Matching';
};
password1.addEventListener('keyup', () => {
    if (password2.value.length != 0) 
        checkPassword();
    
});
password2.addEventListener('keyup', checkPassword);