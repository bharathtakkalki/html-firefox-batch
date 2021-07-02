// Arrays

var array = ["string", 4, { name: "Anant" }];

var objectAsArray = { 0: "String", 1: "SomeOther String" }


console.log(typeof array)
console.log(array instanceof Array)
console.log(array)

console.log(array[0], array[1], array[2].name)
console.log(objectAsArray[0])

var listOfStudents = [ { name: "Anant" }, { name: "Anant" }, { name: "Anant" }] // List
var arrayOfNames = ["Anant","Saurav","Mallik","Rohit"] // Homogeneous

for(var i=0;i<arrayOfNames.length;i++){
    console.log(arrayOfNames[i])
}

var newArray = arrayOfNames.forEach((name,index,array)=>{ // Traverse through the array
    console.log(index)
    return{name:name,rollNo:index+1}
    // console.log(array)
})

console.log(newArray)

function forEach(func){
    for(var i=0;i<arrayOfNames.length;i++){
        func(arrayOfNames[i],i)
    }
}

forEach((name,index)=>{
    console.log(name,index)
})

var newArrayOfNames = arrayOfNames.map((value,index)=>{
    // console.log(value,index)
    return{name:value,rollNo:index+1}
    // return value
})

console.log(newArrayOfNames[0])

var filteredArray = arrayOfNames.filter((value,completelyUnrelated)=>{
    if(value === "Saurav") return false;
    return true;
})
console.log(arrayOfNames)
console.log(filteredArray)

console.log(arrayOfNames.sort())

console.log(typeof arrayOfNames.join(),arrayOfNames.join())

var arrayAsStack = [];

arrayAsStack.push("Uday")
arrayAsStack.push("Devansh")

console.log(arrayAsStack)

console.log(arrayAsStack.pop())

console.log(arrayAsStack.pop())

console.log(arrayAsStack.pop())

console.log(arrayAsStack[100])

var object = {invoice1:{total:1000}}

console.log(object["invoice1"].total)
console.log(object["invoice2"])



var arrayAsQueue = []

arrayAsQueue.push("Uday")
arrayAsQueue.push("Devansh")
arrayAsQueue.unshift("Bhavani")

console.log(arrayAsQueue.shift())
console.log(arrayAsQueue.shift())


var arrayOfNumber = [100,300,400,500,300,4005,6060]

var totalOfInvoice =  arrayOfNumber.reduce((prevVal,currValue)=>{
    console.log(prevVal,currValue)
    return prevVal + currValue
})

console.log(totalOfInvoice)

console.log(arrayOfNames)

arrayOfNames.splice(1,0,"Rishi","Nikhil","Abhishek")
console.log(arrayOfNames)