var numOne = 10;
var numTwo = 3.33;
var numThree = -3.333333;
var numFour = 3.8;
var numFive = 1.2;
console.log(typeof numOne,typeof numTwo,typeof numThree)

console.log(numOne + numTwo)

console.log(numFive + numFour)

console.log((numTwo + numThree).toFixed(3))

console.log(typeof numOne.toString())
numOne++
console.log(numOne)

console.log( parseInt(numTwo))
console.log( parseFloat(numOne))

console.log("Sum",numOne + numTwo)
console.log("Sub",numOne - numTwo)
console.log("Multiplication",numOne * numTwo)
console.log("Division",(numOne / numTwo).toFixed(2))
console.log("Modulo",4 % 2)
numOne--

console.log("Decrement",numOne)

var a = 1

console.log(numOne+=1)
console.log(numOne-=1)
console.log(numOne/=1)
console.log(numOne*=1)
console.log(numOne%=1)

var studentOne = 'Veeru'
var studentTwo = "Abhishek"
console.log(typeof studentOne, typeof studentTwo, studentOne,studentTwo)

var studentThree = ' Hi im "Uday" '

var firstName = "Sunil"
var secondName = "Kumar"

console.log(firstName + " " +secondName)

console.log(`jergerghoierghiiohoierhgio`)
console.log(`${firstName} ${secondName}`)


console.log(studentThree)

console.log(firstName+=secondName)

var stringNumber = "12"

var newNumber = 10

console.log(typeof stringNumber, typeof newNumber)

console.log(  10 + newNumber + stringNumber + 200)
var divisor = 0
if(divisor){
    console.log(typeof 10/divisor)
}

console.log(firstName.charCodeAt(0))

var undef = "undefined" // True
var undef2 = undefined //False

// 0 -> False
// 1 -> True
if(null){
    console.log("Im here")
}
if(undef){
    console.log("Im here in undef")
}else{
    console.log("Im in else")
}

if(undef2){
    console.log("Im here in undef")
}else{
    console.log("Im in else")
}

// {Condition} ? {True Section} : {False Section}
undef2 ? console.log("im true") : console.log("im not true");
undef ? console.log("Im in true Section") : console.log("Im in false Section")

1 === 1 || 2 === 2 ? console.log("Im here") : console.log("False here")

var value = 40
var valueAlwaysTen =  value < 10 ? 10 : value;

console.log(valueAlwaysTen)

