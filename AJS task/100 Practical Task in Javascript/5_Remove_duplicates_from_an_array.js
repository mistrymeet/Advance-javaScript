let data = ['meet', 'prem', 'prem', 'meet', 'karan', 'meet', 'karan']
function duplicateFind() {
    let dup = data.filter((e, i) => {
        return data.indexOf(e) === i
    })
    return dup
}

let test = duplicateFind()
console.log("🚀 ~ file: 5_Remove_duplicates_from_an_array.js:10 ~ test:", test)
