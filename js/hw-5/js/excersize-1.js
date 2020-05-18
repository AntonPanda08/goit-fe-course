const Account = function(login, email) {
  this.login = login;
  this.email = email;
};

const mango = new Account('Mangozedog', 'mango@dog.woof');
console.log(mango);

const poly = new Account('Poly', 'poly@mail.com');
console.log(poly);

Account.prototype.getInfo = function() {
  console.log(`Login: ${this.login}, Email: ${this.email}`);
};

mango.getInfo();

poly.getInfo();
