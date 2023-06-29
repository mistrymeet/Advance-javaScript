// task-3

// 1. ['i','am', 'urvish'] ==> want ['urvish','am','i']
// by use of map, loop and reducer 

let arr = ['i','am', 'urvish'];
// let output = name.map(x=>)

let revarr = []
let output = arr.map((x)=>{
    revarr.unshift(x)
})
console.log(revarr)

let red = []
let meet = arr.reduce((acc,curr)=>{
    red.unshift(curr)
},0)
console.log(red)


let arrrev = []
for(let i = arr.length-1;i>=0;i--){
    arrrev.push(arr[i])
}
console.log(arrrev)

// 2. want "i am urvish" without use join method
let urvish = ['i','am', 'urvish']
let want = ""

for (let i = 0; i < urvish.length; i++) {
    want = want + urvish[i] + " ";  
}
console.log(want)