let person= [
    { name: "kush", age: 12 },
    { name: "tej", age: 10 },
    { name: "smit", age: 18 },
    { name: "ram", age: 20 },
  ];

  let output = person.map((x)=>{
    return x.name
  })
  console.log(output)