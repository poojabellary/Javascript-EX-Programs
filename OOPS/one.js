class Account{
    min_Bal=500;
    amount=500;
    open_Account()
    {
    console.log("Acc opened")
}
deposite_Amount(a1)
{
    this.amount=a1
    console.log(this.amount)
}
get_Bal()
{
    return this.amount+this.min_Bal
}
}
let a1=new Account();
console.log(a1)
a1.open_Account();
a1.deposite_Amount(1000)
