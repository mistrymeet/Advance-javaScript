let person= [
    { name: "kush", age: 12 },
    { name: "tej", age: 10 },
    { name: "smit", age: 18 },
    { name: "ram", age: 20 },
  ];
  let age = person.filter((x)=>{
    return x.age>18
  })
  console.log(age)