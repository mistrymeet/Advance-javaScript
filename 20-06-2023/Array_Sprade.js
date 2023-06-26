let arr = [1,5,7,22,25,30]
let arr2 = [...arr]

console.log(arr2)

let sum = arr.reduce((acc, curr)=>{
    if(curr += acc){
        acc = curr
    }
    return acc
})

console.log(sum)