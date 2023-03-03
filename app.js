const inputElement = document.getElementById('emailInput');
const buttonElement = document.getElementById('submitEmail');


const alertBox = () => {
    const emailValue = inputElement.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    (emailRegex.test(emailValue)) ? alert(`Thank you! Your email ${emailValue} successfully added to our subscribers list`) : alert(`Error. You should use the correct Email syntax`);
}

buttonElement.addEventListener('click', alertBox);