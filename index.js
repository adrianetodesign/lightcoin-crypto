class Account {

  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    let total = 0;
    for (let transaction of this.transactions) {
      total += transaction.value;
    }
    return total;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

};

class transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
     // Keep track of the time of the transaction
     this.time = new Date();
     // Add the transaction to the account
     this.account.addTransaction(this);
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
