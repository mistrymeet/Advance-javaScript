class calculator{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }

    sum(num){
        return this.x + this.y + num
    }

    sub(num){
        return this.x - this.y - num
    }
}

let cal = new calculator(50,25)
console.log(cal)

let x = cal.sum(100)
console.log(x)

let y = cal.sub(100)
console.log(y)