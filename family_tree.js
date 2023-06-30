let familyDetails = {
    name: 'kachubhai',
    age: 68,
    dob: '01/01/1955',
    child: [
        {
            id: 101,
            name: 'dineshbhai',
            age: 50,
            dob: '30/09/1972',
            occupation: 'Buisnessman',
            vechical_info: [
                { name: 'Baleno', Number: 'GJ05-DK-1112' },
                { name: 'Ertiga', Number: 'GJ05-SD-2909' },
                { name: 'Access', Number: 'GJ05-MD-3377' },
                { name: 'Activa', Number: 'GJ05-PD-6212' }
            ],
            child: [
                {
                    name: 'Prembhai',
                    age: 26,
                    occupation: 'Architect'
                },
                {
                    name: 'Meet',
                    age: 25,
                }
            ]

        },
        {
            id: 102,
            name: 'Nitaben',
            age: 49,
            dob: '12/05/1974',
            occupation: 'House-Wife',
            vechical_info: [
                { name: 'Access', Number: 'GJ05-NJ-1573' },
                { name: 'Splender', Number: 'GJ05-MN-7722' }
            ],
            child: [
                {
                    name: 'Neha',
                    age: 22,
                    occupation: 'Student'
                }
            ]

        },
        {
            id: 103,
            name: 'Ketanbhai',
            age: 47,
            dob: '10/12/1975',
            occupation: 'Gas-Station',
            vechical_info: [
                { name: 'Access', Number: 'GJ05-KH-2750' },
                { name: 'Activa', Number: 'GJ05-RH-1212' },
                { name: 'Splender', Number: 'GJ05-VH-7442' }
            ],
            child: [
                {
                    name: 'Riya',
                    age: 23,
                },
                {
                    name: 'Dhruvi',
                    age: 23
                },
                {
                    name: 'Keval',
                    age: 21
                },
                {
                    name: 'Kushal',
                    age: 21
                }
            ]

        }
    ]
}

// =============================================================
// let data =familyDetails.child.map((e)=>{
//     console.log(e?.name)
// })

// function hello(id){
//     console.log(familyDetails.child[id])
// }
// hello(0)

// =============================================================

// function printChildById(id) {
//     let match = familyDetails.child.find((x) => {
//         return x.id === id
//     })
//     return match
// }

// let data =
//     printChildById(101)

// console.log(data)

// let family = familyDetails.child.map((e) => {
//     console.log(e?.name)
// })

// =========================================================
// function childName(){
//     let info = familyDetails.child.find((x)=>{

//     })
// }
// =========================================================

function printChild(id) {
    let match = familyDetails.child.find((x) => {
        return x.id === id
    })
    // console.log("match", match)
    let childName = match.child.map((e) => {
        // console.log(e.name)
        return e.name
    })
    console.log("childName", childName)
    return childName
}


let data = printChild(101)
console.log("data", data)


function vechicalInfo(id) {
    let set = familyDetails.child.find((x) => {
        return x.id === id
    })
    let vechical = set.vechical_info.map((e)=>{
        return e
    })
    return vechical
}

let vechicalData = vechicalInfo(101)
console.log("vehical", vechicalData)

