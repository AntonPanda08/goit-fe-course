const amountRef = document.querySelector('input[type="number"]');
const boxesRef = document.querySelector('div#boxes');
let boxes = [];
const createBoxes = amount => {
  amount = amountRef.addEventListener('input', e => Number(e.target.value));
    boxes.push('');
    boxes.map(() => {
      const boxItem = document.createElement('div');
      boxesRef.appendChild(boxItem);
    });
  }
};
