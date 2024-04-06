
class BankAccount {
    accountNumber = (Math.floor(Math.random() * 10110) +1);

    ownerName = "Jon Doe";
    balance = 100;
    
    deposit (amount){
        this.balance +=amount;
        return amount;
      
        
    }

    withdraw(amount){
        this.balance-=amount;
        if(this.balance < 100){
            console.log("“Insufficient funds”");
        }
        return amount;
    }
    getBalance(balance){
        return balance;
    }
    displayAccountInfo(){
        return (`Displays the account information: \n Account Number: ${this.accountNumber}\n Owner Name: ${this.ownerName} \nBalance: ${this.balance}`);
    }

}
const acc = new BankAccount();

console.log("Account Information: ");
console.log("Account Number: "+acc.accountNumber);
console.log("Owner Name : "+acc.ownerName);

 acc.deposit(600);
 acc.withdraw(300);
console.log("Balance: "+acc.balance);

console.log("");
console.log(acc.displayAccountInfo())

console.log("");
console.log("depositing, withdrawing and displaying account information: \n");

acc.deposit(600);
acc.withdraw(650);

console.log(" depositing: "+ acc.deposit(600) +"\n withdrawing: "+  acc.withdraw(650))
