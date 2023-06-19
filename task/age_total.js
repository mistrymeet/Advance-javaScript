let person= [
    { name: "kush", age: 12 },
    { name: "tej", age: 10 },
    { name: "smit", age: 18 },
    { name: "ram", age: 20 },
  ];
  let agetotal = person.reduce((lastEle, ele)=>{
    let total = (lastEle.age || lastEle) + ele.age;
    return total
  })
  console.log(agetotal)