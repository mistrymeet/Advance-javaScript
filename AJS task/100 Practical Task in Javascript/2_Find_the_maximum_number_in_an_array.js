let num = [1,2,3,4,5,6,7,8,9,10];
let largestNumber = 0;

for (let i = 0; i < num.length; i++) {
    const element = num[i];
    if(element > largestNumber){
        largestNumber = element
    }
    
}

console.log(largestNumber)

num.map((e)=>{
    return e > largestNumber ? largestNumber = e : null
})
console.log(largestNumber)

let max = num.reduce((acc, curr)=>{
    if(acc < curr){
        acc = curr
    }
    return acc

})
console.log("🚀 ~ file: 2_Find_the_maximum_number_in_an_array.js:24 ~ max ~ max:", max)