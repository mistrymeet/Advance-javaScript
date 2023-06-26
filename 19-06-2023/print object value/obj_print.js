let personDetails = {
    name:'meet',
    surname:'mistry',
    age:'24',
    add:{
        city:'surat'
    },
    vehical:['Access','baleno',{model:'2023'}],
    fun1:(x)=>{
        console.log(`x = ${x}`)
        return x
    }
}

console.log(personDetails)
console.log(`Name = ${personDetails.name}`)
console.log(`Surname = ${personDetails.surname}`)
console.log(`age = ${personDetails.age}`)
console.log(`address = ${personDetails.add.city}`)
console.log(`vehical = ${personDetails.vehical}`)
console.log(`model = ${personDetails.vehical[2].model}`)
console.log(`function = ${personDetails.fun1.x}`)


let meet = [1,554,764,884,211,4778,24]
let mistry = ['hello','world','sky']

let conc = [...meet,...mistry]

console.log(`merging = ${conc}`)