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

// 2 region to country
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

// 3 subregion to country
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

// 4 country to currency
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

// 5 region to currncy
function regionCurrncy(regionName){
    let regN = data.filter((x)=>{
        return x.region === regionName
    })
    let newArr = []
    regN.map((x)=>{
        return x.currency ? newArr.push({
            name:x.name,
            currncy:x.currency,
            currency_name:x.currency_name,
            currency_symbol:x.currency_symbol
        }) : null
    })
    return newArr
}

let regCurr = regionCurrncy("Asia")
console.log("🚀 ~ file: country.js:84 ~ regCurr:", regCurr)

// 6 region curr loop
function loopRegionCurrency(regionName){
    let regionN= data.filter((x)=>{
        return x.region === regionName
    })
    let newArr = []
    for (let i = 0; i < regionN.length; i++) {
        const element = regionN[i];
        newArr.push({
            country:element.name,
            currency:element.currency,
            currency_name:element.currency_name,
            native:element.native
        })   
    }
    return newArr
}

let newCurr = loopRegionCurrency("Asia")
console.log("🚀 ~ file: country.js:100 ~ newCurr:", newCurr)

//sub region currncy symbol
function subRegionCurr(subRegName){
    let subR = data.filter((x)=>{
        return x.subregion === subRegName
    })
    let newArr = []
    for (let i = 0; i < subR.length; i++) {
        const element = subR[i];
        newArr.push({
            name:element.name,
            capital:element.capital,
            currency:element.currency,
            currency_name:element.currency_name,
            currency_symbol:element.currency_symbol,
            native:element.native
        })
    }
    return newArr
}

let subCurr = subRegionCurr("Southern Asia")
console.log("🚀 ~ file: country.js:128 ~ subCurr:", subCurr)

//country to phone code 
function countryPhonecode(countryName){
    let country = data.filter((x)=>{
        return x.name === countryName
    })
    let phoneCode = country.map((x)=>{
        return x.phone_code
    })
    return phoneCode
}

let phoneC = countryPhonecode("Israel")
console.log("🚀 ~ file: country.js:142 ~ phoneC:", phoneC)