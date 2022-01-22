class Account {

  constructor(username) {
    this.username = username;

    this.balance = 0;
  }

};

class transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    this.account.balance += this.value;
  }

}

class Withdrawal extends transaction {

  get value() {
    return -this.amount;
  }

};

class Deposit extends transaction {

  get value() {
    return this.amount;
  }

};




// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account("snow-patrol");

t1 = new Deposit(120.00, myAccount);
t1.commit();
console.log('Transaction 1:', t1);

t2 = new Withdrawal(50.25, myAccount);
t2.commit();
console.log('Transaction 1:', t2);

console.log('Balance:', myAccount.balance);
