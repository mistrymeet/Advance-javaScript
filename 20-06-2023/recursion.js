let meet = [1,2,3,4,5]

function hello(x){
    console.log(x)
    if(x > 0){
        hello(x.shift - 1)
    }else{
        console.log('==================> finished')
    }
}

hello(10)



