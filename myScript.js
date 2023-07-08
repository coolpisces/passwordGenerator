const passwordButton = document.querySelector('.passwordButton');
const input = document.querySelector('input');
const icon = document.querySelector('i');
const alertContainer = document.querySelector('.alertContainer');

passwordButton.addEventListener('click', createPassword);

function createPassword() {
    const passwordLength = 14;
    const characters = '0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let password = '';

    for (let index = 0; index < passwordLength; index++) {
        const randomNumber = Math.floor(Math.random() * characters.length);
        password += characters[randomNumber];
    }
    input.value = password;

}

function copyPassword() {
    if (input.value) {
        input.select();
        navigator.clipboard.writeText(input.value);
        alertContainer.innerHTML = `${input.value} was coppied!`;
        alertContainer.classList.remove('active');
        alertContainer.classList.remove('active');
        setTimeout(() => {
            alertContainer.classList.add('active');

        }, 2000);
    }
}

icon.addEventListener('click', copyPassword);