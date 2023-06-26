// task-2
let task= [1,2,3,6,7,9,3,56,8]

// 1. give all value which can devided by 2
let two = task.filter((x)=>{
    return x % 2 === 0
})
console.log(two)

// 2. give all value above 3 by use of filter
let three = task.filter((x)=>{
    return x % 2
})
console.log(three)

// 3. give index of 56
let ind = task.indexOf(56)
console.log(ind)

// 4. give true/false result when check given vale is exists in array or not 
