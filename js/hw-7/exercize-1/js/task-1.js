console.log('ЗАДАЧА 1');
const itemRef = document.querySelectorAll('li.item');
console.log(`В списке ${itemRef.length} категории.`);

const titleRef = document.querySelectorAll('li.item');
const infoTable = titleRef.forEach(titleRefValue => {
  const category = titleRefValue.querySelector('h2').textContent;
  const categoryItem = titleRefValue.querySelectorAll('li');
  console.log(`Категория: ${category}
Количество элементов: ${categoryItem.length}`);
});
