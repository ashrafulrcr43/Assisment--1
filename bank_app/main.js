class BankAccount {
    accountNumber = Math.floor(Math.random()*101001+1);
    ownerName = 'Karim Khan';
    balance = 600;
    deposit(amount){
        this.balance +=amount;
        return amount;
    }
    withdraw(amount){
        this.balance -= amount;
        if(this.balance < 100){
            console.log("“Insufficient funds");
        }
        return amount;
    }
    getBalance(){
        return this.balance;
    };
    displayAccountInfo(){
        return (`Account Number:  ${this.accountNumber = (Math.floor(Math.random()*101001+1))}\n Owner Name: ${this.ownerName = 'John Doe'}\n Balance: ${this.balance}`)
        
    }
}
const person1 = new BankAccount();
const person2 = new BankAccount();
console.log("Simple Information About Account:");
console.log("account Number: "+person1.accountNumber);
console.log("owner Name: "+person1.ownerName);
console.log("Balance: "+person1.balance);
console.log("");
console.log("Second Step Account Information:");
person2.deposit(500);
person2.withdraw(300);
console.log(person2.displayAccountInfo());
console.log("");
console.log("depositing, withdrawing, and displaying account information");
console.log("depositing: "+person2.deposit(500)+"\nwithdrawing:"+ person2.withdraw(300));
