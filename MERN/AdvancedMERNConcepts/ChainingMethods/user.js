class User {
    constructor(username, emailAddress) {   
        this.name = username      
        this.email = emailAddress  
        this.accountBalance = 0
    }
    makeDeposit(amount) {                
        this.accountBalance += amount;  
    }
    makeWithdrawal(amount){
        this.accountBalance -= amount;
    }
    displayBalance(){
        console.log(this.accountBalance)	
    }
    transferMoney(otherUser, amount) {
        this.makeWithdrawal(amount);
        otherUser.makeDeposit(amount);
        console.log(`Transfer successful. ${this.name} transferred $${amount} to ${otherUser.name}.`);
      }
}

const bruno = new User("Bruno", "Skendaj", 1000)
const klajdi = new User("Klajdi", "Tolis", 2000)
const silvio = new User("Silvio", "Tolaj", 3000)

bruno.makeDeposit(1000).makeDeposit(1000).makeDeposit(1000).displayBalance()

klajdi.makeDeposit(1000).makeDeposit(1000).makeWithdrawal(500).makeWithdrawal(500).displayBalance()

silvio.makeDeposit(1000).makeWithdrawal(500).makeWithdrawal(500).makeWithdrawal(500).displayBalance()

bruno.transferMoney(silvio, 300)
bruno.displayBalance()
silvio.displayBalance()