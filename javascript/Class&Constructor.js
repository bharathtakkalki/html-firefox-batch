// Objects & Array

var studentOne = {
    name:"Uday",
    lastName:"Charan",
    designation:"Full Stack",
    education:{
        certified: true
    },
    address:{
        city:"Bangalore"
    }
}

var testObject =  { ...studentOne } // Spread Operator & Shallow Copy
testObject.name = "Suraj"
testObject.lastName = "C"
testObject.address.city = "Hyderabad"
testObject.designation ="MERN"
console.log(studentOne)
console.log(testObject)

var testObjectTwo = Object.assign({},studentOne)

console.log(testObjectTwo)

testObjectTwo.name = "Pabitra"
testObjectTwo.lastName = "J"
testObjectTwo.address.city = "Delhi"
testObjectTwo.designation ="MEAN"
testObjectTwo.education.certified = false

console.log(studentOne)
console.log(testObject)
console.log(testObjectTwo)


var arrayOne = [ "Uday","Suraj", "Pabitra"]
var shallowCopiedArray = [...arrayOne]
var arrayTwo = arrayOne

arrayTwo[0] = "Aditya"

console.log(arrayOne)
console.log(arrayTwo)
console.log(shallowCopiedArray)

class Graph{
    
    constructor(){
        this.node;
    }
    getNode(){
        return this.node
    }
}


class Car {
    constructor(model,price,color){
        this.model=model;
        this.price=price;
        this.color=color;
    }
    getColor(){
        console.log(this)
        return this.color
    }
    getPrice(){
        return this.price
    }
    getModel(){
        return this.model
    }
}

var bmw = new Car("BMW","50L","Blue");
var jeep = new Car("Jeep","50l","Red")
console.log(bmw instanceof Car,bmw)
console.log(bmw.getColor())
console.log(jeep.getColor())


function CarPattern(model,price,color){
    this.model=model,
    this.price = price,
    this.color=color
    this.getColor=function(){
        return this.color
    }
    this.getPrice=function(){
        return this.price
    }
    this.getModel=function(){
        return this.model
    }
}

var merc = new CarPattern("Mercedes","50L","Black");
console.log(merc instanceof Car,merc instanceof CarPattern,merc)
console.log(merc.model)


var audi = CarPattern("Audi","50L","White")
console.log(audi instanceof Car,audi instanceof CarPattern,audi)
