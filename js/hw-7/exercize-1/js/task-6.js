const checkInputRef = document.querySelector('input#validation-input');
const onCheckInput = event => {
  if (event.target.value.length < 6) {
    checkInputRef.classList.add('invalid');
  }
  if (event.target.value.length >= 6) {
    checkInputRef.classList.add('valid');
    checkInputRef.classList.remove('invalid');
  }
};

checkInputRef.addEventListener('change', onCheckInput);
