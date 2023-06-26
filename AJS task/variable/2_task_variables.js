let x = 100
var y = 100
const z = 100
const m
{
      x= 90 
      y= 90 
      z= 90 
      console.log(x) // ___________________ point-x1 
      console.log(y) // ___________________ point-y1 be 90
      console.log(z) // ___________________ point-z1 
} 

console.log(x) //___________________ point-x2
console.log(y) //___________________ point-y2
console.log(z) //___________________ point-z2

// what will print at x1-_______ answer will be 90
// what will print at y1-_______ answer will be 90
// what will print at z1-_______ error throw because we can't declare same name in const
// what will print at x2-_______ answer will be 90 because in javascript call declare variable
// what will print at y2-_______ answer will be 90 because in javascript call declare variable
// what will print at z2-_______ error throw because we can't declare same name in const