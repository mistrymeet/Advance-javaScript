let pro = new Promise((resolve, reject) => {
    let student = {name:'meet'}
    resolve(student.name);
})

pro.then((res)=>{
    let first = student.age='25'
    first
}).then((res)=>{
    let second = student.address='hscajacacjdbdjcakdca kdc k'
    second
}).catch((err)=>{
    console.log("error")
})

console.log(pro)