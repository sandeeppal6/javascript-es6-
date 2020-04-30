class Account {
  constructor(accountNumber, accountType) {
    this.accountNumber = accountNumber;
    this.accountType = accountType;
  }
}

class SavingAccount extends Account {
  constructor(accountNumber, accountType, accountHolderName, accountBalance) {
    super(accountNumber, accountType);
    this.accountHolderName = accountHolderName;
    this.accountBalance = accountBalance;
  }

  getAccountDetail() {
    return {
      accountNumber: this.accountNumber,
      accountType: this.accountType,
      accountBalance: this.accountBalance,
      accountHolderName: this.accountHolderName,
    };
  }
}
const savingAccount = new SavingAccount(785426, "saving", "sandeep", 5000);

console.log(savingAccount.getAccountDetail());
