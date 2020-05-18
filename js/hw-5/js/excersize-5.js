class Car {
  constructor({ speed = 0, price = 0, maxSpeed, isOn = false, distance = 0 }) {
    this._speed = speed;
    this._price = price;
    this._maxSpeed = maxSpeed;
    this._isOn = isOn;
    this._distance = distance;
  }

  get price() {
    return this._price;
  }
  set price(price) {
    this._price = price;
  }
  turnOn() {
    return (this._isOn = true);
  }
  turnOff() {
    return (this._isOn = false), (this._speed = 0);
  }
  accelerate(value) {
    if (this._speed + value < this._maxSpeed) {
      return (this._speed += value);
    }
    return this._speed;
  }
  decelerate(value) {
    if (this._speed - value > 0) {
      return (this._speed -= value);
    }
    return this._speed;
  }
  drive(hours) {
    if ((this._isOn = true)) {
      return (this._distance += hours * this._speed);
    }
    return this._distance;
  }

  static getSpecs(car) {
    return `maxSpeed: ${car._maxSpeed}, speed: ${car._speed}, isOn: ${car._isOn}, distance: ${car._distance}, price: ${car._price}`;
  }
}
const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);
console.log(Car.getSpecs(mustang));
mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();
console.log(Car.getSpecs(mustang));
console.log(mustang.price);
mustang.price = 4000;
console.log(mustang.price);
