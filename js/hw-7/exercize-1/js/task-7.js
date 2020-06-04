const rangeRef = document.querySelector('input#font-size-control');
const textRef = document.querySelector('span#text');
const onChangeSize = event => {
  textRef.style.fontSize = event.target.value + 'px';
  console.log(event.target.value);
};
rangeRef.addEventListener('change', onChangeSize);
