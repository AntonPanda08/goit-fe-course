const btnDecRef = document.querySelector('[data-action="decrement"]');
const btnIncRef = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector('#value');
let value = 0;
const onDecriment = () => {
  value -= 1;
  counterValue.textContent = value;
};
const onIncrement = () => {
  value += 1;
  counterValue.textContent = value;
};
btnDecRef.addEventListener('click', onDecriment);
btnIncRef.addEventListener('click', onIncrement);
