let data = require("./in.json")


// 1 with the name of state give all city related to that state
function cityToState(state){
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


let storeFilterState = cityToState("Rājasthān")
console.log("🚀 ~ file: city.js:13 ~ storeFilterState:", storeFilterState)

//========================================================
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

let storePopulation = cityPopulation('150371')
console.log("======================================", storePopulation)

//============================================================
//7 sum population of city by state name
function sumCityPopulation(state){
    let filterState = data.filter((x)=>{
        return x.state_name === state
    })
    let total = 0;
    // filterState.reduce((acc,curr)=>{
    //     total = parseInt(curr.population) + total
    //     return total
    // })*/
    filterState.map((x)=>{
        total = parseInt(x.population) + total
    })
    console.log("total",total)
    
}
sumCityPopulation("Gujarāt")

//=================================================
// 7 city wise population show
function matchCityName(cityname){
    let filterCity = data.filter((x)=>{
        return x.city === cityname
    })
    let population = []
    for (let i = 0; i < filterCity.length; i++) {
        const element = filterCity[i].population;
        population.push(element)
    }
    return population

}
let match = matchCityName("Sūrat")
console.log("🚀 ~ file: city.js:74 ~ match:", match)        

// city to state
function cityState(cityName){
    let filterCity = data.filter((x)=>{
        return x.city === cityName
    })
    let filterState = filterCity.filter((x)=>{
        return x.state_name
    })
    let newArr = []
    for (let i = 0; i < filterState.length; i++) {
        const element = filterState[i].state_name;
        newArr.push(element)
    }
    return newArr
}

let cityS = cityState('Cawnpore')
console.log("🚀 ~ file: city.js:94 ~ cityS:", cityS)

//5 city search
function citySearch(search){
    let city = data.filter((x)=>{
        return x.city.toLowerCase().includes(search)
    })
    city.sort((a,b)=>{
        return a.population - b.population
    })
    return city  
} 

let final = citySearch("ra")
console.log("🚀 ~ file: city.js:116 ~ final:", final)


// map
function mapPopulation(){
    let newArray = [];
    let newData = data.map((p) => {
      return p.population < 10000
        ? newArray.push({
            cityName: p.city,
            population: p.population,
          })
        : null;
    });
    console.log("🚀 ~ file: json-task.js:43 ~ newData ~ newData:", newArray);
}

mapPopulation()

// map state city
function mapStateCity(stateName){
    let state = data.filter((x)=>{
        return x.state_name === stateName
    })
    let newArr = []
    let city = state.map((x)=>{
        return x.city ? newArr.push({
            city:x.city,
            population:x.population
        }) : null
    })
    return newArr
}

let mapCity = mapStateCity("Gujarāt")
console.log("🚀 ~ file: city.js:144 ~ mapCity:", mapCity)