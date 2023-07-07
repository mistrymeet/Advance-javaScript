let john = {name:'john',age:30};
let pete = {name:'pete',age:32};
let mary = {name:'mary',age:28}

let user = [john,pete,mary]
let output = user.map((x)=>{
    return x.name
})
console.log("🚀 ~ file: 3_ Map to names.js:9 ~ output ~ output:", output)
