//Create a constructor function called BankAccount that takes accountNumber, name, type, and balance as arguments.
//Inside the constructor, initialize the properties of the bank account object.

function BankAccount(acc,n,t,b){
    this.accountNumber = acc;
    this.name = n;
    this.type = t;
    this.balance = b;
}

//deposit(amount) - Deposits the specified amount into the account.
//withdraw(amount) - Withdraws the specified amount from the account if the balance is sufficient.
//checkBalance() - Prints the account's balance.
//isActive() - Checks and returns whether the account is active.

BankAccount.prototype.deposit = function(value){
    this.balance = this.balance + value;
}

BankAccount.prototype.withdraw = function(value){
    if(this.balance < value){
        console.log("inSufficient balance");
    }
    else{
        this.balance = this.balance - value;
    }
}

BankAccount.prototype.checkBalance = function(){
    console.log(this.balance);
}

BankAccount.prototype.isActive = function(){
    if(this.balance <= 0){
        console.log("not Activate");
    }
    else{
        console.log("Activate")
    }
}
function getTotalBalance(){
    let totalBalance = 0;
    if(this.balance == 0){
        console.log("not activate")
    }
    else{
        totalBalance = p1.balance+p2.balance
    }
    return totalBalance;
}

let p1 = new BankAccount(1234,"manish","Saving",1000)
let p2 = new BankAccount(4321,"shyam","saving",500)

p1.deposit(200)
p1.withdraw(50)
p1.checkBalance()

p2.deposit(300)
p2.withdraw(100)
p2.checkBalance()

// p3 = p1.balance+p2.balance

console.log(p1)
console.log(p2)
// console.log(p3)



a = getTotalBalance()
console.log("Total balance:",a)