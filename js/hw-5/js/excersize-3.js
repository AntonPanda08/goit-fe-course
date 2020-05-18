class Storage {
  constructor(Array) {
    this.Array = Array;
  }
  getItems() {
    return this.Array;
  }
  addItem(item) {
    const newArray = this.Array.push(item);
    return newArray;
  }
  removeItem(item) {
    for (let i = 0; i < this.Array.length; i += 1) {
      if ((this.Array[i] = item)) {
        const newArray = this.Array.splice(i, 1);
        return newArray;
      }
    }
  }
}
const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items);

storage.addItem('Дроид');
console.table(items);

storage.removeItem('Пролонгер');
console.table(items);
