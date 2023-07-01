let data = require("./in.json")


// 1 with the name of state give all city related to that state
function cityState(state){
    let filterState = data.filter((x)=>{
        return x.state_name === state 
    })
//2 city name less than 6 charecter
    let filterCityLength = filterState.filter((x)=>{
        return x.city.length <= 7
    })
//3 population
    let filterCityPopulation = filterCityLength.filter((x)=>{
        return x.population < 3382000
    })
//4 accending decending
    filterCityPopulation.sort((a,b)=>{
        return b.population - a.population
    })
    return filterCityPopulation
}


let storeFilterState = cityState("Uttar Pradesh")
console.log("🚀 ~ file: city.js:13 ~ storeFilterState:", storeFilterState)

// 6 city population
function cityPopulation(population){
    let filterPopulation = data.filter((x)=>{
        return x.population === population
    })
    let populationCityName = filterPopulation.filter((x)=>{
        return x.city
    })
    let newArr = []
    for (let i = 0; i < populationCityName.length; i++) {
        const element = populationCityName[i].city;
        newArr.push(element)
    }
    return newArr

}

let storePopulation = cityPopulation('1131160')
console.log("======================================", storePopulation)

//3 sum population of city by state name
function sumCityPopulation(state){
    let filterState = data.filter((x)=>{
        return x.state_name === state
    })

    newArr = []
    for (let i = 0; i < filterState.length; i++) {
       let element = filterState[i].population;
       newArr.push(element)
    }
    
    let element = ''
    // for (let y = 0; y < newArr.length; y++) {
    //      element += newArr[y];
    // }
    for (const iterator of newArr) {
        element += iterator
    }
    return element
   
}

let storeCityPopulation = sumCityPopulation("Uttar Pradesh")
console.log("sum of population ----------->>", storeCityPopulation)

