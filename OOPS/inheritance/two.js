class Account
{
min_Bal=500;
get_Account_Details(){
console.log("Displaying Amount_Details")
}
}
class Savings_Account extends Account{
    deposite_Amount(Amount){
        console.log(this.min_Bal+Amount)
    }
}
let a1=new Savings_Account();
a1.get_Account_Details()
console.log(a1.min_Bal)
a1.deposite_Amount(1500)

class Current_Account extends Account{
    min_Bal=10000;
    deposite_Amount(amount){
    console.log(this.min_Bal+amount)
}
}
let a2=new Current_Account();
a2.get_Account_Details();
a2.deposite_Amount(25000);


