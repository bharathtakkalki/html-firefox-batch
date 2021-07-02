// Reference Values
// object = {key:value}
var objectExample = {
    key:"value"
}

console.log(typeof objectExample)
console.log(objectExample)

var studentOne = {
    firstName:"Uday",
    lastName:"Charan",
    getName:function(){
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(studentOne)
console.log(studentOne.firstName,studentOne.lastName)
console.log(studentOne.getName())

studentOne["designation"] = "Full Stack Developer";

console.log(studentOne)

delete studentOne.designation

console.log(studentOne)

studentOne.firstName = "Ayan";

console.log(studentOne)


var studentTwo = studentOne

console.log(studentOne, typeof studentOne)
console.log(studentTwo, typeof studentTwo)

studentTwo.firstName = "Nikhil";

console.log(studentOne)

var numberOne = 10
var numberTwo = numberOne

console.log(numberOne,numberTwo)
numberTwo = 30
console.log(numberOne,numberTwo)

var arrayOfStudents = ["Nikhil","Aditya"]
var arrayOfStudentsTwo = arrayOfStudents

console.log(arrayOfStudents,arrayOfStudentsTwo)
arrayOfStudentsTwo[0] = "Rohit"
console.log(arrayOfStudents,arrayOfStudentsTwo)



