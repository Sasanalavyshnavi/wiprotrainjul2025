class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited ₹${amount}. New balance: ₹${this.balance}`);
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew ₹${amount}. New balance: ₹${this.balance}`);
    } else {
      console.log("Insufficient balance!");
    }
  }
}


const account = new BankAccount(12345, 1000);
account.deposit(500);
account.withdraw(300);
account.withdraw(2000);
