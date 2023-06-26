

try {
    let person = { name: 'meet' }
    function hello(p1) {
        // setTimeout(() => {
        //     person.age='23'
        // }, 1000);
        console.log(p1)
        return p1 + 'world-'
    }
    
    async function world(p2) {
        // p2>x1
        // person.add='nj xjd kndndndkdk dkdnkn dkdjn'
        // return person
        await console.log(p2)
    
        let a = p2 + 'meet'
        // throw new Error('locha 6e ')
        console.log(a)
        return a
    
    }
    function name(p3) {
    
        console.log(p3)
    
    
    

    }


    
    let print = 'hello-'
    let x1 = hello(print)
    let x2 = world(x1)
    let x3 = name(x2)

} catch (error) {
    console.log('error-----!', error)
}



