// -> make one array who have value from 1 to 10 
let num = [1,2,3,4,5,6,7,8,9,10]

delete num[3]
console.log(num)
console.log(num[3])
num[3]= 4
console.log(num)

// 1. print 9th and 10th element of array
console.log('num =',num[8])
console.log('num =',num[9])

// 2. print every element of array by map reduce and for loop
let map = num.map((x)=>{
    return x
})
console.log(`map = ${map}`)

let red = num.reduce((lastIndex,ele)=>{
    return lastIndex || ele
})
console.log(`reduce = ${red}`)

for(let i=0;i<10;i++){
    console.log('loop =',num[i])
}

// 3. change a value of 6th element with 100
let replace = num.splice(5,1,100)
console.log(`replace = ${num}`)

// 4. print a array till element value not gratter then 100

// 5. add 1 in every element of an array
let add = num.map((x)=>{
    return x+1
})
console.log(add)

//6. add one 0 in start of array
let zero = num.unshift(0)
console.log(`zero = ${num}`)

// 7. add one 99 in end of array
let last = num.push(99)
console.log(`addition = ${num}`)

// 8. remove 1 element from start of  array
let rem = num.shift()
console.log(num)

// 9. remove 1 element from end of  array
let rem1 =num.pop()
console.log(num)

// 10. do sum of all value of an array with use of map, reduce and for-loop
let v = 0;
let sum = num.map((x)=>{
    return x += v
})
console.log(sum)

let reduce = num.reduce((acc, curr)=>{
    if(curr += acc){
        acc = curr
    }
    return acc
},0)
console.log(reduce)

for(i=0; i<10; i++){
    console.log(num[i])
}

// 11. sort a array in acending decending
let des = num.sort((a,b)=>{
    return b -a 
})
console.log(`descending = ${des}`)

let ace = num.sort((a,b)=>{
    return a - b
})
console.log(`acending = ${ace}`)

// 12. reverce an array with use of method
let rever = num.reverse((x)=>{
    return x
})
console.log(`rev = ${rever}`)

// 13. reverce an array with use of for-loop
