class Account
{
    acc_Id;
    acc_Name;
    acc_Amount;
constructor(id,Name,Amount)
{
    this.acc_Id = id;
    this.acc_Name = Name;
    this.acc_Amount = Amount;
}
get_Bal()
{
    return this.acc_Amount;
}
}
let a1=new Account(101,"Rahul Gandi",1500);
console.log(a1)
console.log(a1.get_Bal())
let a2=new Account(102,"Sonia",5000);
console.log(a2)
console.log(a2.get_Bal())