let john = {name:'john', surname:'smith', id:1}
let pete = {name:'pete', surname:'hunt', id:2}
let mary = {name:'mary', surname:'key', id:3}

let user = [john,pete,mary]
let userMapped = user.map((x)=>{
    console.log(`fullname = ${x.name} ${x.surname}`)
})