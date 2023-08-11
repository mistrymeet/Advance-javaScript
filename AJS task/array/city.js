let data = require("./in.json")


// 1 with the name of state give all city related to that state
function cityToState(state) {
    let filterState = data.filter((x) => {
        return x.state_name === state
    })
    //2 city name less than 6 charecter
    let filterCityLength = filterState.filter((x) => {
        return x.city.length <= 7
    })
    //3 population
    let filterCityPopulation = filterCityLength.filter((x) => {
        return x.population < 3382000
    })
    //4 accending decending
    filterCityPopulation.sort((a, b) => {
        return b.population - a.population
    })
    return filterCityPopulation
}


let storeFilterState = cityToState("Rājasthān")
//========================================================
// 6 city population
function cityPopulation(population) {
    let filterPopulation = data.filter((x) => {
        return x.population === population
    })
    let populationCityName = filterPopulation.filter((x) => {
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
function sumCityPopulation(state) {
    let filterState = data.filter((x) => {
        return x.state_name === state
    })
    let total = 0;
    // filterState.reduce((acc,curr)=>{
    //     total = parseInt(curr.population) + total
    //     return total
    // })*/
    filterState.map((x) => {
        total = parseInt(x.population) + total
    })
    console.log("total", total)

}
sumCityPopulation("Gujarāt")

//=================================================
// 7 city wise population show
function matchCityName(cityname) {
    let filterCity = data.filter((x) => {
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
// city to state
function cityState(cityName) {
    let filterCity = data.filter((x) => {
        return x.city === cityName
    })
    let filterState = filterCity.filter((x) => {
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
//5 city search
function citySearch(search) {
    let city = data.filter((x) => {
        return x.city.toLowerCase().includes(search)
    })
    city.sort((a, b) => {
        return a.population - b.population
    })
    return city
}

let final = citySearch("ra")

// map
function mapPopulation() {
    let newArray = [];
    let newData = data.map((p) => {
        return p.population < 10000
            ? newArray.push({
                cityName: p.city,
                population: p.population,
            })
            : null;
    });
}

mapPopulation()

// map state city
function mapStateCity(stateName) {
    let state = data.filter((x) => {
        return x.state_name === stateName
    })
    let newArr = []
    let city = state.map((x) => {
        return x.city ? newArr.push({
            city: x.city,
            population: x.population
        }) : null
    })
    return newArr
}

let mapCity = mapStateCity("Gujarāt")
//population search
function popSearch(search) {
    let popS = data.filter((x) => {
        return x.population.includes(search)
    })
    let newArr = []
    for (let i = 0; i < popS.length; i++) {
        const element = popS[i];
        newArr.push({ city: element.city, population: element.population })
    }
    return newArr
}

let populationS = popSearch('26')

//mini project
function miniProject(stateName) {
    let state = data.filter((e) => {
        return e.state_name === stateName
    })
    let city = state.filter((e) => {
        return e.city.length > 7
    })
    let population = city.filter((e) => {
        return e.population > 987654
    })
    population.sort((a, b) => {
        return a.population - b.population
    })
    let newArr = []
    for (let i = 0; i < population.length; i++) {
        const element = population[i];
        newArr.push({ city: element.city, population: element.population })
    }
    return newArr
}

let mini = miniProject("Mahārāshtra")
console.log('mini', mini)

//search

function search(state, src) {
    let statec = data.filter((x) => {
        return x.state_name === state
    })
    let citys = statec.filter((x) => {
        return x.city.includes(src)
    })
    let newArr = []
    citys.map((x) => {
        return x.city ? newArr.push(x.city) : null
    })
    return newArr
}

let s = search("Uttar Pradesh", 'a')
console.log("🚀 ~ file: city.js:192 ~ s:", s)
