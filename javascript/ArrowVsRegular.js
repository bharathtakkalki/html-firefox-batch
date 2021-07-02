// Arrow Vs Regular Function

//1 Syntax

function regularFunction(){
    // Statements
    console.log("Im Regular Function")
}

var arrowFunction = () => {
        // Statements
        console.log("Im Arrow Function")
}

regularFunction()
arrowFunction()

// 2 Arguments Binding

function argumentBinding(){
    //Statements 
    console.log(arguments)
}

var arrowArgumentsBinding = (param1,param2) =>{
        //Statements 
        console.log(param1)
        console.log(param2)
        console.log(arguments)
}

argumentBinding(1,2,3,4,5,6,7,"String",{},[])
arrowArgumentsBinding(1,"b",3,4,5,6,7,"String",{},[])

// 3 Context of This
const studentWithRegularFunc = {
    firstName:"Sunil",
    lastName:"Kumar",
    getFullName:function(){
        console.log(this)
        return `${this.firstName} ${this.lastName}`
    }
}
const studentWithArrowFunc ={
    firstName:"Anant",
    lastName:"Verma",
    getFullName:()=>{
        console.log(this)
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(studentWithRegularFunc.getFullName())
console.log(studentWithArrowFunc.getFullName())

// 4 Use of New Keyword 

function Car(model,price,color){
    this.model = model
    this.price = price
    this.color = color
}

var ArrowCar = (model,price,color)=>{
    this.model = model
    this.price = price
    this.color = color
}

console.log(new Car("BMW","20L","Blue"))
// console.log(new ArrowCar("BMW","20L","Blue"))

// 5 Duplicate Params

function add(x,x){
    return x+x;
}

// const arrowAdd = (x,x) =>{
//     return x+x;
// }

console.log(add(3,3))

// 6 Return 

function subtract(a,b){
    return a-b
}

const arrowSubtract = (a,b) => a-b

console.log(subtract(5,2))
console.log(arrowSubtract(5,1))
