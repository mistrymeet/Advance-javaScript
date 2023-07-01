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
