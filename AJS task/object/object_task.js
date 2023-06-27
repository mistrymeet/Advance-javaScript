// ---> make one object who contain your detail like - name,age,multiple vehicles
// -name,and one function print your name and then do below given task

let student = {
    name:'meet',
    age:24,
    vehicals:['baleno','access','fz'],
    fun: ()=>{
        
    },
    printAge: (add)=>{
        return "age: " + add 
    }
}

// 1. print all value of your details object
console.log(student)

// 2. add a function name printAge inside object who print age from outside
console.log(student.printAge(27))

// 3. get all key
console.log('keys ====>',Object.keys(student))

// 4. get all value
console.log('values ====>',Object.values(student))

// 5. add one key for city name and store your city name on it  from outside
student.city="surat"

// 6. make one function name addAge who print age with add some year which one pass by user
student.addAge= function(num){
    return num + this.age
}
console.log(student.addAge(25))

// 7. delete age key from object 
delete student.age
console.log(student)


