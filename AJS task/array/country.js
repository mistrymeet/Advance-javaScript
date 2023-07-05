let data = require("./coun.json")

// 1 country capital
function countryCapital(countryName){
    let country = data.filter((x)=>{
        return x.name === countryName
    })
    let newStr = []
    for (let i = 0; i < country.length; i++) {
        const element = country[i].capital;
        newStr.push(element)
    }
    return newStr
}

let cc = countryCapital("India")
console.log("🚀 ~ file: country.js:12 ~ cc:", cc)

// region to country
function regionCountry(regionName){
    regionN = data.filter((x)=>{
        return x.region === regionName
    })
    let newArr = []
    for (let i = 0; i < regionN.length; i++) {
        const element = regionN[i].name;
        newArr.push(element) 
    }
    return newArr
}
let reg = regionCountry("Africa")
console.log("🚀 ~ file: country.js:27 ~ reg:", reg)

// subregion to country
function subRegionCountry(subRegionName){
    let subRegion = data.filter((x)=>{
        return x.subregion === subRegionName
    })
    let newArr = []
    for (let i = 0; i < subRegion.length; i++) {
        const element = subRegion[i].name;
        newArr.push(element)
    }
    return newArr
}

let subC = subRegionCountry("South-Eastern Asia")
console.log("🚀 ~ file: country.js:48 ~ subC:", subC)

// country to currency
function countryCurruncy(countryName){
    let country = data.filter((x)=>{
        return x.name === countryName
    })
    let newArr = []
    for (let i = 0; i < country.length; i++) {
        const element = country[i].currency;
        newArr.push(element)
    }
    return newArr
}

let currency = countryCurruncy("India")
console.log("🚀 ~ file: country.js:64 ~ currency:", currency)





