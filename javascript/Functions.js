// Function

function Student(firstName,lastName){
    this.firstName=firstName
    this.lastName=lastName
}

var anonymousFunc = function(){
    console.log("Im here")
}

var lambdaFunc = (a,b) => {
    console.log(a,b)
    console.log("Im in Lambda")
}

lambdaFunc(2,3)

function calculator(func,valueOne,valueTwo){
    return func(valueOne,valueTwo)
}

// console.log(calculator(function(a,b){return a*b},10,20))

// anonymousFunc()
// lambda()
var getA;
var getB
(function(){
    var a = 10
    var b = 20
    console.log(a+b)
    getA = function(){
        return a
    }
    getB = function(){
        return b
    }
    console.log("Immediately Invoked Function")
})()
var a = 300
console.log(a)
console.log(getA())
console.log(getB())




function example(){
    var a = 10
    var b = 20
    return function(value){
        return value === "A" ? a : b
    }
}

var a = 400
console.log(a)

var getClosedValues = example()
console.log(getClosedValues("A"))


function argExample(){
    console.log(...arguments)
}

argExample(100,200,300,400,500,600)