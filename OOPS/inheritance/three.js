class Parent{
constructor(){
    console.log("Parent Constructor ")
}
}
class Child extends Parent{
    constructor()
        {
            super()
        console.log("child class constructor")
    }
}
new Child()


