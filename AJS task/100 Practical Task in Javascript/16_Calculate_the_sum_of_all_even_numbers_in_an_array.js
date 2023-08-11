let arr = [1,2,3,4,5,6,7,8,9,10]

function evenAddition(){
    let even = arr.filter((e)=>{
        return e % 2 === 0
    })
    let newArr = even.reduce((acc, curr)=>{
        if (acc + curr){
            acc = curr + acc
        }
        return acc
    })
    return newArr
}

let data = evenAddition()
console.log("🚀 ~ file: 16_Calculate_the_sum_of_all_even_numbers_in_an_array.js:11 ~ data:", data)
