const inputRef = document.querySelector('input#name-input');
const nameLabelRef = document.querySelector('span#name-output');
const onChangeName = event => {
  nameLabelRef.textContent = event.target.value;
  if (!event.target.value) {
    nameLabelRef.textContent = 'незнакомец';
  }
};

inputRef.addEventListener('input', onChangeName);
