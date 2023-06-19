let person= [
    { name: "kush", age: 12 },
    { name: "tej", age: 10 },
    { name: "smit", age: 18 },
    { name: "ram", age: 20 },
  ];

 let count = 0;
 let main = person.map(()=>{
    return count++
 })
 console.log(main)