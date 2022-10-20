class Account{
    get_Account(){
        console.log("Account class details")
    }
}
class Savings_Account extends Account{
    get_Account(){
        console.log(" Savings Account class details")//method overriding
    }

}
let a1=new Savings_Account();
a1.get_Account();