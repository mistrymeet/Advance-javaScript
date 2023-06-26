class Meet{
    print(){
        console.log("my name is meet")
    }
}

class Mistry extends Meet{
    welcome(){
        console.log("my surname is mistry")
    }
}

let x = new Mistry()
x.print()
x.welcome()