class Account{
    constructor(name,email){
        this.acc_Name=name;
        this.acc_Email=email;
    }

}
class Savings_Account extends Account{
    constructor(id,name,email,amount){
        super(name,email)
        this.acc_id=id;
        this.acc_amount=amount;
    }


}
let a1=new Savings_Account(101,"Rahul","rahul@gmail.com",1500)
console.log(a1)
let a2=new Savings_Account(101,"sonia","sonia@gmail.com",2500)
console.log(a2)


