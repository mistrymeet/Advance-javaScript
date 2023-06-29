// task-4

// ['i','am', 'urvish'] ==> want ['hsivru','ma','i'  ]
// by use of map, loop and reducer 

let meet = ['i','am', 'meet']
let out = meet.map((value)=>value.split("").reverse().join(""))
console.log("reverse str with map", out)


let revarr = [];
for (let i = 0; i < meet.length; i++) {
    const element = meet[i].split("").reverse().join("");
    revarr.push(element)
}
console.log("reverse str with loop",revarr)

let redu = meet.reduce((acc,curr)=>{
   let redloop = curr.split("").reverse().join("")
   return [...acc,redloop]
},[])
console.log("reverse str with reduce",redu)