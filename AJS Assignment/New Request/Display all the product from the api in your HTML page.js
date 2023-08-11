let data = require('./Use fetch method for calling an api.json')

function displayProduct(){
    let product = data.map((x)=>{
        return x.title 
    })
    return product
}

let output = displayProduct()
console.log("🚀 ~ file: Display all the product from the api in your HTML page.js:11 ~ output:", output)

function searchProduct(search){
    let filterProduct = data.filter((x)=>{
        return x.title.toLowerCase().includes(search)
    })
    let newArr = [];
    filterProduct.map((x)=>{
        return x.title ? newArr.push(x.title) : null
    })
    return newArr
}

let productwStore = searchProduct("women's");
console.log("🚀 ~ file: Display all the product from the api in your HTML page.js:21 ~ productwStore:", productwStore)

//pricefilter
function priceFilter(search){
    let filterP = data.filter((x)=>{
        return x.price.toString().includes(search)
    })
    newArr = [];
    for (let i = 0; i < filterP.length; i++) {
        const element = filterP[i];
        newArr.push(element.price)
    }
    return newArr
}

let priceStore = priceFilter(6)
console.log("🚀 ~ file: Display all the product from the api in your HTML page.js:41 ~ priceStore:", priceStore) 