let data = require('./Use fetch method for calling an api.json')

function displayProduct(){
    let product = data.map((x)=>{
        return x.title 
    })
    return product
}

let output = displayProduct()
console.log("🚀 ~ file: Display all the product from the api in your HTML page.js:11 ~ output:", output)
